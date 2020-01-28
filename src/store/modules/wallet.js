import WalletService from "@/services/WalletService";
import router from "@/router";
export default {
    namespaced: true,
    state: {
        walletData: 0,
        webpayResponse: null
    },
    getters: {
        getwalletData(state) {
            if (state.walletData !== null && state.walletData !== undefined) {
                return state.walletData;
            }
            return null;
        },
        webpayDetails(state) {
            if (state.webpayResponse !== null && state.webpayResponse !== undefined) {
                return state.webpayResponse;
            }
            return null;
        }
    },
    actions: {
        FetchUserwallet({ commit }, payload) {
            commit("auth/SET_LOADING", true, { root: true });
            commit("SET_PAYMENT_RESPONSE", null);
            return WalletService.getWallet(payload)
                .then(({ data }) => {
                    commit("auth/SET_LOADING", false, { root: true });
                    commit("SET_USER_WALLET", data);
                    // console.log(data);
                })
                .catch(error => {
                    commit("auth/SET_LOADING", false, { root: true });
                    console.log(error);
                });
        },
        createUserwallet({ commit, state }, payload) {
            // set inputs to state
            commit("auth/SET_LOADING", true, { root: true });
            commit("SET_PAYMENT_RESPONSE", null);
            return WalletService.createWallet(payload)
                .then(({ data }) => {
                    commit("auth/SET_LOADING", false, { root: true });
                    commit("SET_USER_WALLET", data);
                })
                .catch(error => {
                    commit("auth/SET_LOADING", false, { root: true });
                });
        },
        paymentStepOne({ commit }, payload) {
            commit("auth/SET_LOADING", true, { root: true });
            console.log(payload);
            WalletService.postPayment(payload)
                .then(({ data }) => {
                    commit("SET_PAYMENT_RESPONSE", data);
                    router.push("/valueind");
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mutations: {
        SET_ERRORS(state, error) {
            state.errors = error;
        },
        SET_USER_WALLET(state, data) {
            state.walletData = data;
        },
        SET_SUCCESS_MSG(state, success) {
            state.success = success;
        },
        SET_PAYMENT_RESPONSE(state, data) {
            state.webpayResponse = data;
        }
    }
};
