"use client";

import { useState, useEffect, useCallback } from "react";

interface ApiKeyDisplay {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  lastUsedAt: string | null;
  rawKey?: string; // Only present right after creation
}

export function ApiKeysForm() {
  const [keys, setKeys] = useState<ApiKeyDisplay[]>([]);
  const [newKeyName, setNewKeyName] = useState("");
  const [creating, setCreating] = useState(false);
  const [revoking, setRevoking] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [justCreatedKey, setJustCreatedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const loadKeys = useCallback(async () => {
    const res = await fetch("/api/settings/api-keys");
    if (res.ok) {
      const data = await res.json();
      setKeys(data.keys);
    }
  }, []);

  useEffect(() => {
    loadKeys();
  }, [loadKeys]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newKeyName.trim()) return;
    setCreating(true);
    setError(null);
    setJustCreatedKey(null);

    const res = await fetch("/api/settings/api-keys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newKeyName.trim() }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(typeof data.error === "string" ? data.error : "Failed to create key");
      setCreating(false);
      return;
    }

    const data = await res.json();
    setJustCreatedKey(data.key.rawKey);
    setNewKeyName("");
    setCreating(false);
    loadKeys();
  }

  async function handleRevoke(keyId: string) {
    setRevoking(keyId);
    setError(null);

    const res = await fetch(`/api/settings/api-keys?id=${keyId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      setError(typeof data.error === "string" ? data.error : "Failed to revoke key");
    }

    setRevoking(null);
    loadKeys();
  }

  async function copyKey(key: string) {
    await navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      {/* Newly created key banner */}
      {justCreatedKey && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-medium text-amber-900">
            Copy your API key now — it won&apos;t be shown again.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <code className="flex-1 rounded bg-white px-3 py-2 text-sm font-mono text-gray-900 border border-amber-200 select-all">
              {justCreatedKey}
            </code>
            <button
              onClick={() => copyKey(justCreatedKey)}
              className="rounded-lg bg-amber-600 px-3 py-2 text-sm font-medium text-white hover:bg-amber-700"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Existing keys */}
      {keys.length > 0 && (
        <div className="divide-y divide-gray-100 rounded-lg border border-gray-200">
          {keys.map((key) => (
            <div
              key={key.id}
              className="flex items-center justify-between px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{key.name}</p>
                <p className="text-xs text-gray-500">
                  <code>{key.prefix}</code>
                  {" · Created "}
                  {new Date(key.createdAt).toLocaleDateString()}
                  {key.lastUsedAt && (
                    <>
                      {" · Last used "}
                      {new Date(key.lastUsedAt).toLocaleDateString()}
                    </>
                  )}
                </p>
              </div>
              <button
                onClick={() => handleRevoke(key.id)}
                disabled={revoking === key.id}
                className="rounded px-3 py-1 text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
              >
                {revoking === key.id ? "Revoking..." : "Revoke"}
              </button>
            </div>
          ))}
        </div>
      )}

      {keys.length === 0 && !justCreatedKey && (
        <p className="text-sm text-gray-500">
          No API keys yet. Create one to connect via MCP.
        </p>
      )}

      {/* Create form */}
      <form onSubmit={handleCreate} className="flex items-end gap-3">
        <div className="flex-1">
          <label
            htmlFor="api-key-name"
            className="block text-xs font-medium text-gray-500"
          >
            Key name
          </label>
          <input
            id="api-key-name"
            type="text"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            placeholder="e.g. My MCP Client"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
          />
        </div>
        <button
          type="submit"
          disabled={creating || !newKeyName.trim()}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 disabled:opacity-50"
        >
          {creating ? "Creating..." : "Create Key"}
        </button>
      </form>

      {/* MCP connection instructions */}
      <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
        <p className="text-xs font-medium text-gray-500">
          MCP Server Configuration
        </p>
        <pre className="mt-2 overflow-x-auto rounded bg-white p-3 text-xs text-gray-700 border border-gray-200">
{`{
  "mcpServers": {
    "kompwatch": {
      "url": "https://kompwatch.com/api/mcp",
      "headers": {
        "Authorization": "Bearer <your-api-key>"
      }
    }
  }
}`}
        </pre>
      </div>
    </div>
  );
}
