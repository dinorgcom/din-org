import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "din.org — The decision endpoint";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#f5f1ea",
          color: "#14130f",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span
            style={{
              fontSize: "30px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            din.org
          </span>
          <span
            style={{
              fontSize: "15px",
              letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
              color: "#6b4f2c",
            }}
          >
            The decision endpoint
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: "64px",
              height: "3px",
              backgroundColor: "#6b4f2c",
              marginBottom: "36px",
            }}
          />
          <div
            style={{
              fontSize: "84px",
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
              marginBottom: "28px",
            }}
          >
            Outsource the verdict.
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 400,
              fontStyle: "italic" as const,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#4a4640",
              maxWidth: "1000px",
            }}
          >
            Keep the relationship.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #d8d2c4",
            paddingTop: "28px",
          }}
        >
          <span style={{ fontSize: "21px", color: "#4a4640" }}>
            Reasoned, auditable rulings as infrastructure.
          </span>
          <span style={{ fontSize: "21px", color: "#6b4f2c" }}>
            din.org
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
