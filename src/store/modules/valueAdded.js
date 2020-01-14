import ash from "lodash";
import router from "../../router";
import valueAddedService from "@/services/valueAddedService";
import UserService from "@/services/UserService";
// import ash from 'lodash';
export default {
  namespaced: true,
  state: {
    valueadded: [],
    success: null,
    errors: null
  },
  getters: {
    serviceListings(state) {
      if (state.valueadded !== null && state.valueadded !== undefined) {
        return state.valueadded;
      }
      return;
    },
    getErrors(state) {
      if (state.errors !== null && state.errors !== undefined) {
        return state.errors;
      }
      return;
    },
    getSuccess(state) {
      if (state.success !== null || state.success !== undefined) {
        return state.success;
      } else {
        return;
      }
    },
  },
  actions: {
    fetchAllService({ commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_SUCCESS_MSG", null);
      commit("SET_ERRORS", null);
      return valueAddedService.billers()
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_SERVICE", data);
        })
        .catch(() => {
          commit("auth/SET_LOADING", false, { root: true });
          commit(
            "SET_ERRORS",
            "Network Error, Please make sure you are connected..."
          );
        });
    },
  },
  mutations: {
    SET_SERVICE(state, data) {
      state.valueadded = data;
    }
  }
};
