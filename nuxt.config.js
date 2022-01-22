export default {
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 64000;
      }
    },
  },
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
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100;400;700&display=swap",
      },
    ],
  },
  modules: ["@nuxtjs/google-gtag", "@nuxtjs/vuetify", "nuxt-compress"],
  components: true,
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
  server: {
    host: "0",
  },
  "nuxt-compress": {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },
};
