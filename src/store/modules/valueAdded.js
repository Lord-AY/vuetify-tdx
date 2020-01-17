import ash from "lodash";
import router from "../../router";
import valueAddedService from "@/services/valueAddedService";
import UserService from "@/services/UserService";
// import ash from 'lodash';
export default {
  namespaced: true,
  state: {
    valueadded: [],
    payment: null,
    transaction: null,
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
    },
    paymentItems(state) {
      if (state.payment !== null || state.payment !== undefined) {
        return state.payment;
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
          commit("auth/SET_LOADING", false, {root: true});
          commit("SET_PAYMENT_ITEMS", data);
        }).catch(error => {
           commit("auth/SET_LOADING", false, {root: true});
           commit("SET_ERRORS", "Network Error, Cant connect to server...");
        })
    },
    validatePaymentOption({commit, rootState, dispatch}, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_SUCCESS_MSG", null);
      commit("SET_ERRORS", null);
      if (rootState.auth.user == null) {
        router.push('login');
      }
      payload.custId = "00000000" + rootState.auth.user.id
      // console.log(payload);
      return valueAddedService.paymentOption(payload)
        .then(({data}) => {
          commit("auth/SET_LOADING", true, { root: true });
          commit("SET_SUCCESS_MSG", "Payment request validated successfully...");
          commit("SET_TRANSACTION_DETAILS", payload);
          dispatch('paymentAdvices', {payload: data});
        }).catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          if(error.status == 500 ) {
          commit("SET_ERROR", "Server Error, please try again...")
          } else if(error.status == 404) {
          commit("SET_ERROR", "Network Error, please try again");
          }
          commit("SET_ERROR", "Please fill in a correct phone number")
          console.log(error.response);
        })
    },
    paymentAdvices({commit, state, rootState}, {payload}) {
      commit("auth/SET_LOADING", true, { root: true });
      let customers = payload.Customers;
      const parseObj = Object.assign({}, customers[0]);
      // console.log(parseObj.amount);
      const refinedPayload = {
        custId: parseObj.customerId,
        amount: parseObj.amount,
        phone: state.transaction.phone,
        userid: rootState.auth.user.id,
        email: rootState.auth.user.email,
        paymentCode: parseObj.paymentCode
      }
      valueAddedService.advice(refinedPayload)
        .then(({data}) => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(data)
        }).catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(error.response);
        })
    }
  },
  mutations: {
    SET_BILLERS(state, data) {
      state.valueadded = data;
    },
    SET_PAYMENT_ITEMS(state, data) {
      state.payment = data;
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
    SET_SUCCESS_MSG(state, success) {
      state.success = success;
    },
    SET_TRANSACTION_DETAILS(state, data) {
      state.transaction = data;
    }
  }
};
