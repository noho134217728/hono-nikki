// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import react from "@astrojs/react";

import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://astro-micro-academic.vercel.app",
  output: "static",
  integrations: [
    tailwind(),
    sitemap(),
    pagefind(),
    react(),
    mdx({
      compilerOptions: {
        jsxImportSource: "react",
      },
      remarkPlugins: [remarkToc, remarkMath],
      rehypePlugins: [
        [
          rehypeKatex,
          {
            displayMode: true,
            macros: {
              "": "\\displaystyle",
            },
          },
        ],
      ],
    }),
  ],
  markdown: {
    // ▼▼▼ この2行を追加 ▼▼▼
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    // ▲▲▲ ここまで追加 ▲▲▲
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "css-variables",
    },
  },
  server: { port: 1234, host: true },
});