import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { portfolio } from "~/portfolio.config";

export const alt = `${portfolio.name} - ${portfolio.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function sniff(buf: Buffer): string | null {
  if (buf.subarray(0, 8).toString("hex") === "89504e470d0a1a0a") return "image/png";
  if (buf.subarray(0, 3).toString("hex") === "ffd8ff") return "image/jpeg";
  if (buf.subarray(0, 4).toString("ascii") === "RIFF" && buf.subarray(8, 12).toString("ascii") === "WEBP")
    return "image/webp";
  if (buf.subarray(0, 4).toString("ascii") === "GIF8") return "image/gif";
  return null;
}

function embed(file: string): string | null {
  try {
    const buf = fs.readFileSync(path.join(process.cwd(), "public", file));
    const type = sniff(buf);
    return type ? `data:${type};base64,${buf.toString("base64")}` : null;
  } catch {
    return null;
  }
}

const banner = embed("banner-poster.jpg") || embed("avatar.jpg");
const avatar = embed("avatar.jpg") || embed("avatar.png");

const ART = { w: 1887, h: 630, left: -546 };

const PROOF = [
  "Full Stack Developer",
  "React & Next.js",
  "TypeScript & Node.js",
  "AI Applications",
].join("   ·   ");

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#070b16",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {banner && (
          <img
            src={banner}
            width={ART.w}
            height={ART.h}
            style={{ position: "absolute", left: ART.left, top: 0 }}
          />
        )}

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            backgroundImage:
              "linear-gradient(90deg, rgba(4,7,14,0.90) 0%, rgba(4,7,14,0.72) 34%, rgba(4,7,14,0.26) 66%, rgba(4,7,14,0.00) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            backgroundImage:
              "linear-gradient(180deg, rgba(4,7,14,0.14) 0%, rgba(4,7,14,0.0) 44%, rgba(4,7,14,0.38) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: size.width,
            height: size.height,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px 64px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            {avatar && (
              <img
                src={avatar}
                width={84}
                height={84}
                style={{ borderRadius: 42, border: "2px solid rgba(255,255,255,0.22)", objectFit: "cover" }}
              />
            )}
            <div
              style={{
                fontSize: 19,
                letterSpacing: 5,
                color: "rgba(255,255,255,0.62)",
              }}
            >
              {portfolio.location.toUpperCase()}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div
              style={{
                fontSize: 94,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: -2.5,
                lineHeight: 1,
                textShadow: "0 2px 26px rgba(0,0,0,0.65)",
              }}
            >
              {portfolio.name}
            </div>
            <div
              style={{
                fontSize: 30,
                color: "rgba(255,255,255,0.84)",
                lineHeight: 1.35,
                marginTop: 18,
                textShadow: "0 1px 14px rgba(0,0,0,0.7)",
              }}
            >
              {portfolio.tagline}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 1,
                color: "rgba(255,255,255,0.78)",
                textShadow: "0 1px 12px rgba(0,0,0,0.7)",
              }}
            >
              {PROOF}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 22 }}>
              <div style={{ height: 4, width: 52, background: "#3b82f6", borderRadius: 2 }} />
              <div style={{ fontSize: 26, color: "#ffffff" }}>
                {portfolio.url.replace(/^https?:\/\//, "")}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
