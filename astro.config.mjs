import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://astro-micro-academic.vercel.app",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "css-variables",
    },
    remarkPlugins: [remarkToc, remarkMath, remarkEmoji],
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeAccessibleEmojis,
      [
        rehypeKatex,
        {
          displayMode: true, // ✅ ブロック数式を強制的に display mode に
          macros: {
            "": "\\displaystyle" // ✅ すべての式に \displaystyle をデフォルト適用
          }
        }
      ]
    ],
  },
  server: { port: 1234, host: true }
});

