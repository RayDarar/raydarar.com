import Vue from "vue";
import Vuex from "vuex";
import en from "./lang/en";
import ru from "./lang/ru";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabIndex: 0,
    language: null
  },
  mutations: {
    setActiveTab(state, index) {
      for (const tab of state.tabs) tab.isSelected = false;
      state.tabs[index].isSelected = true;
    },
    setLanguage(state, lang) {
      if (lang === "ru") state.language = ru;
      else state.language = en;
    },
    setTabIndex(state, index) {
      state.tabIndex = index;
    }
  },
  actions: {},
  modules: {}
});
