import type { DigestCompetitorGroup } from "@/lib/digest";

/**
 * Webhook integration for Slack, Microsoft Teams, and generic webhook endpoints.
 * Auto-detects the platform from the URL and formats the payload accordingly.
 */

type WebhookPlatform = "slack" | "teams" | "generic";

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
        text: `CompeteWatch ${periodLabel} Digest`,
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
      text: `CompeteWatch ${periodLabel} Digest`,
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
    source: "competewatch",
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
 * Send a webhook notification with digest data.
 * Returns { ok: true } on success, { ok: false, error: string } on failure.
 */
export async function sendWebhookNotification(
  webhookUrl: string,
  groups: DigestCompetitorGroup[],
  period: "DAILY" | "WEEKLY"
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

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });

    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}: ${res.statusText}` };
    }
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Unknown webhook error",
    };
  }
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

/** Exported for testing */
export {
  detectPlatform,
  formatSlackPayload,
  formatTeamsPayload,
  formatGenericPayload,
};
