import pkg from "./package";
// import axios from "axios";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // target: "universal",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // { name: "yandex-verification", content: "efjweljwe23523j" }, //надо заменить контент когда придет ключ от яндекса или добавить html файл от яндекса в статик
      // { name: "google-site-verification", content: "efjwas-eljwe23-523j" }, //надо заменить контент когда придет ключ от гугла
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.css", "~/assets/css/animation.css"],

  // также можем прописать на vue-файле для отдельной странице
  transition: {
    name: "fade",
    mode: "out-in",
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/app-components.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // [
    //   "@nuxtjs/google-analytics",
    //   {
    //     id: "UA-XXX-X",
    //   },
    // ],
    // [
    //   "@nuxtjs/yandex-metrika",
    //   {
    //     id: "XXXX",
    //     webvisor: true, //много ест ресурсов.
    //     clickmap: true,
    //     trackLinks: true,
    //   },
    // ],
  ],

  axios: {
    baseURL: "http://testapi",
    common: {
      // Accept: "application/json, text/plain, */*",
      // "Content-Type": "application/json, text/plain, */*",
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vue", "axios"],
  },

  // generate: {
  //   routes() {
  //     return axios.get("http://testapi/?select=articles").then((res) => {
  //       return res.data.map((post) => {
  //         return "/blog/" + post.id;
  //       });
  //     });
  //   },
  // },
};
