import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")),
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
