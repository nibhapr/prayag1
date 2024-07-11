import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Prayag Group",
  tagline: "Start up garage ",
  description: "",
  description_short: "",
  url: "https://orchidfresh.ae",
  author: "Orchid fresh",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Prayag aurora is the best startup garage in kerala,India `,
  description: "welcome to startup garage.We provide tailored business consulting and mentorship to guide your venture through its early stages",
  image: ogImageSrc,
};
