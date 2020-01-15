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
    billerListings(state) {
      if (state.valueadded !== null && state.valueadded !== undefined) {
        return state.valueadded;
      }
      return;
    },
    getBillerCategories(state) {
      let categories = [];
      let sortedCategories = [];
      let allBillers = state.valueadded;
      if (allBillers !== null && allBillers !== undefined) {
        for (let biller in allBillers) {
          // add all biller categories into an array for sorting
          categories.push(allBillers[biller].categoryname);
        }
        // sort array of categories, remove duplicate categories
        sortedCategories = ash.sortedUniq(categories);
        return sortedCategories;
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
    }
  },
  actions: {
    fetchAllBillers({ commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_SUCCESS_MSG", null);
      commit("SET_ERRORS", null);
      return valueAddedService
        .billers()
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_BILLERS", data.billers);
        })
        .catch(() => {
          commit("auth/SET_LOADING", false, { root: true });
          commit(
            "SET_ERRORS",
            "Network Error, Please make sure you are connected..."
          );
        });
    },
    paymentItem({ commit }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_SUCCESS_MSG", null);
      commit("SET_ERRORS", null);
      return valueAddedService.payment(payload)
        .then(({data}) => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(data);
        }).catch(error => {
          console.log(error);
        })
    }
  },
  mutations: {
    SET_BILLERS(state, data) {
      state.valueadded = data;
    }
  }
};
