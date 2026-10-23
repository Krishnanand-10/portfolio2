import { handles } from "@/data/links";
import { portfolio } from "~/portfolio.config";
import { REVALIDATE, requestTimeout, withFallback } from "./shared";

export type SocialProfileData = {
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  location: string;
  banner?: boolean;
  stats: { value: string | number; label: string }[];
  stale: boolean;
};

const AVATAR = "/avatar.jpg";
const LOCATION = `${portfolio.location} (${portfolio.utcOffset})`;

/**
 * X killed its public follower endpoint and LinkedIn answers every
 * unauthenticated request with HTTP 999, so neither count can be fetched.
 * Set real numbers in `portfolio.config.ts` to show them.
 */
const FOLLOWERS = portfolio.followers;

/** GitHub's REST API is public, so repo and follower counts are always current. */
function getGithubProfile() {
  return withFallback<SocialProfileData>("github-profile", async () => {
    const res = await fetch(`https://api.github.com/users/${handles.github}`, {
      next: { revalidate: REVALIDATE },
      signal: requestTimeout(),
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`github http ${res.status}`);
    const d = await res.json();
    return {
      name: "Krishna Nand Tiwari",
      handle: handles.github,
      avatar: AVATAR,
      bio: d.bio || portfolio.bios.github,
      location: LOCATION,
      stats: [
        { value: String(d.public_repos ?? 13), label: "Repositories" },
        { value: String(d.followers ?? 2), label: "Followers" },
      ],
    };
  }, {
    name: "Krishna Nand Tiwari",
    handle: handles.github,
    avatar: AVATAR,
    bio: portfolio.bios.github,
    location: LOCATION,
    stats: [
      { value: "13", label: "Repositories" },
      { value: "2", label: "Followers" },
    ],
  });
}

/**
 * X.com profile data for the hover card.
 */
function getXProfile() {
  return withFallback<SocialProfileData>("x-profile", async () => {
    let followers = FOLLOWERS.x || "3";
    let following = "17";
    try {
      const res = await fetch(`https://x.com/${handles.x}`, {
        next: { revalidate: REVALIDATE },
        signal: requestTimeout(),
        headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio/1.0)" },
      });
      if (res.ok) {
        const html = await res.text();
        const m = html.match(/property="og:description" content="([^"]+)"/);
        if (m) {
          const folMatch = m[1].match(/([\d,]+)\s+followers/i);
          const fingMatch = m[1].match(/([\d,]+)\s+following/i);
          if (folMatch) followers = folMatch[1];
          if (fingMatch) following = fingMatch[1];
        }
      }
    } catch {
      // Fallback to defaults
    }
    return {
      name: "Krishna Nand Tiwari",
      handle: `@${handles.x}`,
      avatar: AVATAR,
      bio: portfolio.bios.x,
      location: LOCATION,
      banner: true,
      stats: [
        { value: following, label: "Following" },
        { value: followers, label: "Followers" },
      ],
    };
  }, {
    name: "Krishna Nand Tiwari",
    handle: `@${handles.x}`,
    avatar: AVATAR,
    bio: portfolio.bios.x,
    location: LOCATION,
    banner: true,
    stats: [
      { value: "17", label: "Following" },
      { value: "3", label: "Followers" },
    ],
  });
}

async function getLeetCodeProfile(): Promise<SocialProfileData> {
  return {
    name: portfolio.name,
    handle: "",
    avatar: AVATAR,
    bio: "",
    location: LOCATION,
    stats: [],
    stale: false,
  };
}

/**
 * LinkedIn returns HTTP 999 to every unauthenticated request, so there is no
 * public data to read. This mirrors his actual headline and is edited by hand.
 */
function getLinkedInProfile(): SocialProfileData {
  return {
    name: "Krishna Nand Tiwari",
    handle: `in/${handles.linkedin}`,
    avatar: AVATAR,
    bio: portfolio.bios.linkedin,
    location: portfolio.location,
    banner: true,
    stats: [
      { value: "500+", label: "Connections" },
    ],
    stale: false,
  };
}

export async function getSocialProfiles(): Promise<Record<string, SocialProfileData>> {
  const [github, x, leetcode] = await Promise.all([
    getGithubProfile(),
    getXProfile(),
    getLeetCodeProfile(),
  ]);
  return { GitHub: github, Twitter: x, LeetCode: leetcode, LinkedIn: getLinkedInProfile() };
}
