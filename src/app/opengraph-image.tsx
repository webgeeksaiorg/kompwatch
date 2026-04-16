import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "KompWatch — AI Competitor Monitoring";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#ffffff",
            }}
          >
            Compete
          </span>
          <span
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#6366f1",
            }}
          >
            Watch
          </span>
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#f1f5f9",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.3,
          }}
        >
          Know when competitors change anything
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#94a3b8",
            marginTop: 20,
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          AI-powered monitoring for pricing, features, blog posts & job listings
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
          }}
        >
          {["Pricing changes", "Feature launches", "AI digests"].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#cbd5e1",
                  fontSize: 16,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    background: "#6366f1",
                  }}
                />
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
