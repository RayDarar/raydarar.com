import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    getImgUrl(image) {
      const images = require.context("@/assets/", false, /\.svg|\.jpg$/);
      return images("./" + image);
    }
  },
  data: {
    isProd: true
  }
});

app.$mount("#app");

export default app;
