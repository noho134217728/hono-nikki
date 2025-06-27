import type { Metadata, Site } from "@types";

export const SITE: Site = {
  TITLE: "ほのにっき",
  DESCRIPTION: "巨人の肩の上に乗る",
  EMAIL: "noho134217728@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: 'https://hono-nikki.vercel.app' // ご自身のサイトURLに変更しました
};

export const HIGHLIGHTAUTHOR = "John B"

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const RESEARCH: Metadata = {
  TITLE: "Publications",
  DESCRIPTION:
    "A collection of my publications with links to paper, repositories and live demos.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION:
    "your cv",
};

export const TAGS: Metadata = {
  TITLE: "TAGS",
  DESCRIPTION:
    "blog tag filter",
};

export const ABOUT: Metadata = {
  TITLE: "ABOUT",
  DESCRIPTION:
    "A self-intro",
};

// --- ↓ ここから下が追加された部分です ↓ ---

export const SOCIALS = {
  x: "https://x.com/hono_ap_1024",
  github: "", // ← ここにあなたのGitHubのURLを入力すると、アイコンにリンクが設定されます
  email: "noho134217728@gmail.com", // SITE.EMAILから設定しました
  linkedin: "", // ← LinkedInのURL（不要な場合はこのまま）
  scholar: "", // ← Google ScholarのURL（不要な場合はこのまま）
};