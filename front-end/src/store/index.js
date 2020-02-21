import Vue from "vue";
import Vuex from "vuex";
import en from "./lang/en";
import ru from "./lang/ru";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabIndex: 0,
    language: en,
    isFirstOpen: true
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
      if (typeof index == "number") state.tabIndex = index;
      else if (index === "/") state.tabIndex = 0;
      else if (index === "/about-me") state.tabIndex = 1;
      else if (index === "/history") state.tabIndex = 2;
      else if (index === "/projects") state.tabIndex = 3;
      else if (index === "/contacts") state.tabIndex = 4;
    },
    closeFirstOpen(state) {
      state.isFirstOpen = false;
    }
  },
  actions: {},
  modules: {},
  getters: {
    selectedLanguage(state) {
      return state.language == en ? "en" : "ru";
    }
  }
});
