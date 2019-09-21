import Vue from "vue";
import Vuex from "vuex";
import teams from "@/modules/teams";

Vue.use(Vuex);

const deadline = "Sep 21, 2019";

export default new Vuex.Store({
  modules: {
    teams
  },

  state: {
    isAvailableToSubscribe:
      Math.trunc(Date.parse(deadline) / 1000) -
        Math.trunc(new Date().getTime() / 1000) >
      0
  },

  getters: {
    isAvailableToSubscribe(state) {
      return state.isAvailableToSubscribe;
    },
    deadline() {
      return deadline;
    }
  },

  actions: {
    updateAvailability({ commit }, isAvailableToSubscribe) {
      commit("UP_AVAILABILITY", isAvailableToSubscribe);
    }
  },

  mutations: {
    UP_AVAILABILITY(state, isAvailableToSubscribe) {
      state.isAvailableToSubscribe = isAvailableToSubscribe;
    }
  }
});
