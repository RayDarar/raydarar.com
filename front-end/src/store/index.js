import Vue from "vue";
import Vuex from "vuex";
import langs from "./lang";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: langs[0]
  },
  mutations: {
    selectLanguage(state, i) {
      if (langs[i]) state.language = langs[i];
    }
  },
  actions: {},
  modules: {}
});
