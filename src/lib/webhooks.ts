import type { DigestCompetitorGroup } from "@/lib/digest";
import type { Change, ChangeType, Severity, WebhookEventType } from "@prisma/client";
import { db } from "@/lib/db";

/**
 * Webhook integration for Slack, Microsoft Teams, and generic webhook endpoints.
 * Auto-detects the platform from the URL and formats the payload accordingly.
 * Logs every delivery attempt to WebhookDelivery for user visibility.
 */

const MAX_RETRIES = 2;
const RETRY_DELAYS = [1_000, 3_000]; // ms between retries

type WebhookPlatform = "slack" | "teams" | "generic";

export interface InstantAlertChange {
  changeType: ChangeType;
  severity: Severity;
  summary: string;
  details?: string | null;
  pageUrl?: string | null;
  competitor: { name: string; url: string };
}

function detectPlatform(url: string): WebhookPlatform {
  if (url.includes("hooks.slack.com") || url.includes("slack.com/api")) {
    return "slack";
  }
  if (url.includes("webhook.office.com") || url.includes("microsoft.com")) {
    return "teams";
  }
  return "generic";
}

/** Format a Slack Block Kit payload for competitor changes */
function formatSlackPayload(
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY"
): object {
  const totalChanges = groups.reduce((sum, g) => sum + g.changes.length, 0);
  const periodLabel = period === "DAILY" ? "Daily" : "Weekly";

  const blocks: object[] = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: `KompWatch ${periodLabel} Digest`,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${totalChanges} change${totalChanges === 1 ? "" : "s"}* detected across *${groups.length} competitor${groups.length === 1 ? "" : "s"}*`,
      },
    },
    { type: "divider" },
  ];

  for (const group of groups) {
    const changeLines = group.changes
      .map((c) => {
        const emoji = SEVERITY_EMOJI[c.severity] || ":white_circle:";
        return `${emoji} *[${c.changeType}]* ${c.summary}`;
      })
      .join("\n");

    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*<${group.competitor.url}|${group.competitor.name}>*\n${changeLines}`,
      },
    });
  }

  return { blocks };
}

/** Format a Microsoft Teams Adaptive Card payload */
function formatTeamsPayload(
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY"
): object {
  const totalChanges = groups.reduce((sum, g) => sum + g.changes.length, 0);
  const periodLabel = period === "DAILY" ? "Daily" : "Weekly";

  const body: object[] = [
    {
      type: "TextBlock",
      size: "Large",
      weight: "Bolder",
      text: `KompWatch ${periodLabel} Digest`,
    },
    {
      type: "TextBlock",
      text: `**${totalChanges} change${totalChanges === 1 ? "" : "s"}** across **${groups.length} competitor${groups.length === 1 ? "" : "s"}**`,
      wrap: true,
    },
  ];

  for (const group of groups) {
    const changeLines = group.changes
      .map((c) => {
        const icon = SEVERITY_ICON[c.severity] || "-";
        return `${icon} **[${c.changeType}]** ${c.summary}`;
      })
      .join("\n\n");

    body.push(
      {
        type: "TextBlock",
        text: `**[${group.competitor.name}](${group.competitor.url})**`,
        wrap: true,
        separator: true,
      },
      {
        type: "TextBlock",
        text: changeLines,
        wrap: true,
      }
    );
  }

  return {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          type: "AdaptiveCard",
          version: "1.4",
          body,
        },
      },
    ],
  };
}

/** Format a generic JSON payload */
function formatGenericPayload(
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY"
): object {
  const totalChanges = groups.reduce((sum, g) => sum + g.changes.length, 0);
  return {
    source: "kompwatch",
    period,
    totalChanges,
    competitors: groups.map((g) => ({
      name: g.competitor.name,
      url: g.competitor.url,
      changes: g.changes.map((c) => ({
        type: c.changeType,
        severity: c.severity,
        summary: c.summary,
        details: c.details,
      })),
    })),
  };
}

const SEVERITY_EMOJI: Record<string, string> = {
  CRITICAL: ":red_circle:",
  HIGH: ":large_orange_circle:",
  MEDIUM: ":large_yellow_circle:",
  LOW: ":large_green_circle:",
};

const SEVERITY_ICON: Record<string, string> = {
  CRITICAL: "!!",
  HIGH: "!",
  MEDIUM: "-",
  LOW: ".",
};

/**
 * Low-level fetch with retry. Returns detailed result for logging.
 */
async function fetchWithRetry(
  webhookUrl: string,
  payload: object,
): Promise<{ ok: boolean; httpStatus?: number; error?: string; retryCount: number }> {
  let lastError: string | undefined;
  let lastStatus: number | undefined;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 0) {
      await new Promise((r) => setTimeout(r, RETRY_DELAYS[attempt - 1]));
    }

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10_000),
      });

      lastStatus = res.status;
      if (res.ok) {
        return { ok: true, httpStatus: res.status, retryCount: attempt };
      }
      lastError = `HTTP ${res.status}: ${res.statusText}`;

      // Don't retry on 4xx (client errors) — only retry on 5xx / network failures
      if (res.status >= 400 && res.status < 500) {
        return { ok: false, httpStatus: res.status, error: lastError, retryCount: attempt };
      }
    } catch (err) {
      lastError = err instanceof Error ? err.message : "Unknown webhook error";
      lastStatus = undefined;
    }
  }

  return { ok: false, httpStatus: lastStatus, error: lastError, retryCount: MAX_RETRIES };
}

/**
 * Log a webhook delivery attempt. Fire-and-forget — never blocks the caller.
 */
async function logDelivery(params: {
  userId: string;
  eventType: WebhookEventType;
  platform: string;
  webhookUrl: string;
  success: boolean;
  httpStatus?: number;
  errorMessage?: string;
  retryCount: number;
  changeId?: string;
  digestId?: string;
}): Promise<void> {
  try {
    await db.webhookDelivery.create({
      data: {
        userId: params.userId,
        eventType: params.eventType,
        platform: params.platform,
        webhookUrl: params.webhookUrl,
        success: params.success,
        httpStatus: params.httpStatus ?? null,
        errorMessage: params.errorMessage ?? null,
        retryCount: params.retryCount,
        changeId: params.changeId ?? null,
        digestId: params.digestId ?? null,
      },
    });
  } catch {
    // Best-effort logging — don't break the caller
  }
}

/**
 * Send a webhook notification with digest data.
 * Returns { ok: true } on success, { ok: false, error: string } on failure.
 * Logs delivery to WebhookDelivery table and retries on 5xx/network errors.
 */
export async function sendWebhookNotification(
  webhookUrl: string,
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY",
  opts?: { userId?: string; digestId?: string },
): Promise<{ ok: boolean; error?: string }> {
  if (groups.length === 0) {
    return { ok: true }; // Nothing to notify about
  }

  const platform = detectPlatform(webhookUrl);

  let payload: object;
  switch (platform) {
    case "slack":
      payload = formatSlackPayload(groups, period);
      break;
    case "teams":
      payload = formatTeamsPayload(groups, period);
      break;
    default:
      payload = formatGenericPayload(groups, period);
  }

  const result = await fetchWithRetry(webhookUrl, payload);

  if (opts?.userId) {
    logDelivery({
      userId: opts.userId,
      eventType: "DIGEST",
      platform,
      webhookUrl,
      success: result.ok,
      httpStatus: result.httpStatus,
      errorMessage: result.error,
      retryCount: result.retryCount,
      digestId: opts.digestId,
    });
  }

  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  return { ok: true };
}

/** Validate that a URL looks like a valid webhook endpoint */
export function isValidWebhookUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/** Format a single-change instant alert for Slack (Team-tier real-time push) */
export function formatInstantAlertSlackPayload(change: InstantAlertChange): object {
  const emoji = SEVERITY_EMOJI[change.severity] || ":white_circle:";
  const detailsBlock = change.details
    ? [
        {
          type: "section",
          text: { type: "mrkdwn", text: change.details.slice(0, 2900) },
        },
      ]
    : [];
  return {
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `${change.severity} change detected`,
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${emoji} *<${change.competitor.url}|${change.competitor.name}>* — *[${change.changeType}]*\n${change.summary}`,
        },
      },
      ...detailsBlock,
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `KompWatch real-time alert${change.pageUrl ? ` · <${change.pageUrl}|view page>` : ""}`,
          },
        ],
      },
    ],
  };
}

/** Format a single-change instant alert for Teams */
export function formatInstantAlertTeamsPayload(change: InstantAlertChange): object {
  return {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        content: {
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          type: "AdaptiveCard",
          version: "1.4",
          body: [
            {
              type: "TextBlock",
              size: "Large",
              weight: "Bolder",
              text: `${change.severity} change detected`,
            },
            {
              type: "TextBlock",
              text: `**[${change.competitor.name}](${change.competitor.url})** — **[${change.changeType}]**`,
              wrap: true,
            },
            {
              type: "TextBlock",
              text: change.summary,
              wrap: true,
            },
          ],
        },
      },
    ],
  };
}

/** Format a single-change instant alert as generic JSON */
export function formatInstantAlertGenericPayload(change: InstantAlertChange): object {
  return {
    source: "kompwatch",
    kind: "instant_alert",
    severity: change.severity,
    changeType: change.changeType,
    summary: change.summary,
    details: change.details ?? null,
    pageUrl: change.pageUrl ?? null,
    competitor: { name: change.competitor.name, url: change.competitor.url },
  };
}

/**
 * Send a real-time alert for a single change. Used by the snapshot cron when a
 * Team-tier user has instant alerts enabled and a change crosses their severity threshold.
 * Retries on 5xx/network errors and logs delivery status.
 */
export async function sendInstantAlertWebhook(
  webhookUrl: string,
  change: InstantAlertChange,
  opts?: { userId?: string; changeId?: string },
): Promise<{ ok: boolean; error?: string }> {
  const platform = detectPlatform(webhookUrl);
  let payload: object;
  switch (platform) {
    case "slack":
      payload = formatInstantAlertSlackPayload(change);
      break;
    case "teams":
      payload = formatInstantAlertTeamsPayload(change);
      break;
    default:
      payload = formatInstantAlertGenericPayload(change);
  }

  const result = await fetchWithRetry(webhookUrl, payload);

  if (opts?.userId) {
    logDelivery({
      userId: opts.userId,
      eventType: "INSTANT_ALERT",
      platform,
      webhookUrl,
      success: result.ok,
      httpStatus: result.httpStatus,
      errorMessage: result.error,
      retryCount: result.retryCount,
      changeId: opts.changeId,
    });
  }

  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  return { ok: true };
}

/**
 * Send a friendly "Hello from KompWatch" test message so users can verify
 * their webhook URL works before the next digest fires.
 * Logs the delivery attempt for visibility in settings.
 */
export async function sendTestWebhook(
  webhookUrl: string,
  opts?: { userId?: string },
): Promise<{ ok: boolean; error?: string }> {
  const platform = detectPlatform(webhookUrl);
  let payload: object;
  switch (platform) {
    case "slack":
      payload = {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: ":white_check_mark: *KompWatch test alert* — your Slack webhook is wired up. You'll see real change notifications here.",
            },
          },
        ],
      };
      break;
    case "teams":
      payload = {
        type: "message",
        attachments: [
          {
            contentType: "application/vnd.microsoft.card.adaptive",
            content: {
              $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
              type: "AdaptiveCard",
              version: "1.4",
              body: [
                {
                  type: "TextBlock",
                  weight: "Bolder",
                  text: "KompWatch test alert",
                },
                {
                  type: "TextBlock",
                  text: "Your Teams webhook is wired up. You'll see real change notifications here.",
                  wrap: true,
                },
              ],
            },
          },
        ],
      };
      break;
    default:
      payload = {
        source: "kompwatch",
        kind: "test",
        message: "Test alert — your webhook is wired up.",
      };
  }

  const result = await fetchWithRetry(webhookUrl, payload);

  if (opts?.userId) {
    logDelivery({
      userId: opts.userId,
      eventType: "TEST",
      platform,
      webhookUrl,
      success: result.ok,
      httpStatus: result.httpStatus,
      errorMessage: result.error,
      retryCount: result.retryCount,
    });
  }

  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  return { ok: true };
}

// Severity ordering helpers live in @/lib/severity. Re-exported here for
// backwards compatibility with existing snapshot-cron / test imports.
export { severityMeetsThreshold } from "./severity";

/** Adapter so callers passing a Change-like row can be turned into an InstantAlertChange */
export function changeToInstantAlert(
  change: Pick<Change, "changeType" | "severity" | "summary" | "details" | "pageUrl">,
  competitor: { name: string; url: string }
): InstantAlertChange {
  return {
    changeType: change.changeType,
    severity: change.severity,
    summary: change.summary,
    details: change.details,
    pageUrl: change.pageUrl,
    competitor,
  };
}

/** Exported for testing */
export {
  detectPlatform,
  formatSlackPayload,
  formatTeamsPayload,
  formatGenericPayload,
};
