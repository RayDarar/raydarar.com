import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import config from "./config";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  methods: {
    getImgUrl(image) {
      const images = require.context("@/assets/", false, /\.svg|\.jpg$/);
      return images("./" + image);
    },
  },
  data: {
    isProd: config.isProd,
  },
}).$mount("#app");
