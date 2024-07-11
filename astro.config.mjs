import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
export default defineConfig({

  site: "https://orchidfresh.ae",
  image: {
    domains: ["images.unsplash.com"]
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    fallback: {
      fr: "en"
    },
    routing: {
      prefixDefaultLocale: false
    }
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en",
      
      locales: {
        en: "en",
        fr: "fr"
      }
    }
  }), starlight({
    title: "ScrewFast Docs",
    defaultLocale: "root",
    locales: {
      root: {
        label: "English",
        lang: "en"
      },
    
      es: {
        label: "Español",
        lang: "es"
      },
      fa: {
        label: "Persian",
        lang: "fa",
        dir: "rtl"
      },
      fr: {
        label: "Français",
        lang: "fr"
      },
     
    },
   
    sidebar: [{
      label: "Quick Start Guides",
      translations: {
        de: "Schnellstartanleitungen",
    
       
      },
      autogenerate: {
        directory: "guides"
      }
    }, {
      label: "Tools & Equipment",
      items: [{
        label: "Tool Guides",
        link: "tools/tool-guides/"
      }, {
        label: "Equipment Care",
        link: "tools/equipment-care/"
      }]
    }, {
      label: "Construction Services",
      autogenerate: {
        directory: "construction"
      }
    }, {
      label: "Advanced Topics",
      autogenerate: {
        directory: "advanced"
      }
    }],
    social: {
      github: "https://github.com/mearashadowfax/ScrewFast"
    },
    disable404Route: true,
    customCss: ["./src/styles/starlight.css"],
    favicon: "/favicon.ico",
    components: {
      SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
      Head: "./src/components/ui/starlight/Head.astro"
    },
    head: [{
      tag: "meta",
      attrs: {
        property: "og:image",
        content: "https://orchid.ae" + "/social.webp"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: "https://orchid.ae" + "/social.webp"
      }
    }]
  }), playformCompress({
    gzip: false,
    brotli: true
  }), react()],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true
  },
  adapter: vercelStatic()
});