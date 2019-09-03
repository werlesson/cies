import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const deadline = "Sep 14, 2019";

export default new Vuex.Store({
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
