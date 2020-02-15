import Vue from "vue";
import Vuex from "vuex";
import en from "./lang/en";
import ru from "./lang/ru";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: [
      {
        index: 0,
        name: "Home",
        isSelected: false
      },
      {
        index: 1,
        name: "About Me",
        isSelected: false
      },
      {
        index: 2,
        name: "Timelapse",
        isSelected: false
      },
      {
        index: 3,
        name: "Projects",
        isSelected: false
      },
      {
        index: 4,
        name: "Contacts",
        isSelected: false
      }
    ]
  },
  mutations: {
    setActiveTab(state, index) {
      for (const tab of state.tabs) tab.isSelected = false;
      state.tabs[index].isSelected = true;
    }
  },
  actions: {},
  modules: {}
});
