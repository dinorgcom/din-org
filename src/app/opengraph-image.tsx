import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "din.org — The AI Court";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#f5f1e8",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#fff313",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a0a0a",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            d
          </div>
          <span
            style={{
              fontSize: "24px",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#fff313",
            }}
          >
            din.org
          </span>
        </div>
        <div
          style={{
            fontSize: "72px",
            fontWeight: 600,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            maxWidth: "900px",
            marginBottom: "32px",
          }}
        >
          Justice, at the speed of thought.
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "rgba(245,241,232,0.7)",
            maxWidth: "700px",
          }}
        >
          The world&apos;s first AI-powered court. File a case, present
          evidence, and receive a reasoned ruling — end to end.
        </div>
      </div>
    ),
    { ...size }
  );
}
