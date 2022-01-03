export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "eujin.me",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "eujin.me",
        name: "eujin.me project by Tan Eu Jin",
        content: "NodeJs project using the NuxtJs framework",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700;900&display=swap",
      },
    ],
  },
  modules: ["@nuxtjs/google-gtag", "@nuxtjs/vuetify"],
  "google-gtag": {
    id: "G-250JQS16WE",
    debug: true,
  },
  vuetify: {
    theme: { light: true },
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: false,
  },
};
