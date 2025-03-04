import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// import netlify from '@astrojs/netlify';
// https://astro.build/config
export default defineConfig({
  site: "https://www.evolvx.com.au/",
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    })
  ]
});
