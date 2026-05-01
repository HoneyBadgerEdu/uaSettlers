// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Fixel",
      cssVariable: "--font-sans",
      weights: [400, 500, 600],
            options: {
        variants: [
          {
            src: ["./src/assets/fonts/FixelVariable.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.google(),
      name: "Fira Code",
      cssVariable: "--font-mono",
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.local(),
      name: "Fliex Variable",
      cssVariable: "--font-serif",
      weights: [400, 500, 600],
            options: {
        variants: [
          {
            src: ["./src/assets/fonts/FixelVariable.ttf"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-latte",
    },
  },
});
