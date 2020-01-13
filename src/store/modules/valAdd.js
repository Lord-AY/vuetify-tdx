import valaddService from "@/services/valadService";
import ash from "lodash";
import router from "../../router";
import UserService from "../../services/UserService";
// import ash from 'lodash';
export default {
  namespaced: true,
  state: {
    valadd: [],
    success: null,
    errors: null
  },
  getters: {
    serviceListings(state) {
      if (state.valadd !== null && state.valadd !== undefined) {
        return state.valadd;
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
      return valaddService.service()
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
      state.valadd = data;
    }
  }
};
