/**
 * Identity & configuration for Krishna Nand Tiwari's portfolio.
 */

export const portfolio = {
  /** Shown in the hero, page titles and social cards. */
  name: "Krishna",
  /** One line under the name. Keep it short - it is also the meta description. */
  tagline: "Full-stack developer building production-oriented web applications and AI tools.",
  /** Longer form, used for Open Graph and the social hover cards. */
  description:
    "Full-stack developer building production-oriented web applications using React, Next.js, TypeScript, Node.js, and Supabase.",
  location: "Bengaluru, India",
  /** IANA zone for the live clock in the banner. */
  timeZone: "Asia/Kolkata",
  /** UTC offset label shown on the social hover cards. */
  utcOffset: "UTC +05:30",

  /** Canonical origin. NEXT_PUBLIC_SITE_URL overrides this at build time. */
  url: "https://krishnaworks-10.vercel.app",

  /**
   * Usernames only, never full URLs - the code builds the links and the stats
   * fetchers query these directly. Leave a value empty to hide that profile.
   */
  handles: {
    github: "Krishnanand-10",
    linkedin: "krishna-nand-tiwari-547037258",
    x: "Krishna_exe7",
    leetcode: "",
    codeforces: "",
    codechef: "",
  },

  /**
   * Guestbook, backed by GitHub Discussions via giscus.
   * Empty repoId hides the guestbook.
   */
  giscus: {
    repo: "Krishnanand-10/portfolio2" as `${string}/${string}`,
    repoId: "",
    category: "Announcements",
    categoryId: "",
  },

  /** This site's own source, linked in the footer. Set to "" to hide the link. */
  repo: "https://github.com/Krishnanand-10/portfolio2",

  email: "nandkrishna2320@gmail.com",
  /** Path under /public. */
  resume: "/Krishnanand_Tiwari_Resume.pdf",
  /** "Book an intro call" button. Set to "" to hide it. */
  bookingLink: "",

  /**
   * Search Console verification.
   */
  googleSiteVerification: "",

  /**
   * Toggle optional sections off without deleting their code.
   */
  sections: {
    blog: true,
    anime: false,
    hackathons: false,
    dsa: false,
    highlights: false,
  },

  /**
   * Profile blurbs for the hover cards.
   */
  bios: {
    github: "Full-stack developer building production-oriented web applications and AI tools.",
    x: "Full Stack Developer | Building AI apps & scalable web systems",
    linkedin: "Full Stack Developer | MCA at Dayananda Sagar University",
  },

  /**
   * Followers count or null
   */
  followers: {
    x: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export type PortfolioConfig = typeof portfolio;
