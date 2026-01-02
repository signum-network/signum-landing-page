import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import sitemap from "vite-sitemap";

const siteUrl = "https://www.signum.network"; // kanonisch

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      base: siteUrl,
      urls: [
        "",
        "poc-plus",
        "disclaimer",
        "privacypolicy",
        "aboutus",
        "wallet",
        "mining",
        "payments",
        "exchanges",
        "tokens",
        "messages",
        "autopayment",
        "smartcontracts",
        "sna",
        "aliases",
      ],
      changefreq: "weekly",
      robotsTxt: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    }),
  ],
  resolve: {
    alias: {
      "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
    },
  },
});
