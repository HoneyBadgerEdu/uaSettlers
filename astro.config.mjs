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
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-sans",
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-mono",
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-serif",
      weights: [400, 500, 600],
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-latte",
    },
  },
});
