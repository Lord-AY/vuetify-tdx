import WalletService from "@/services/WalletService";

export default {
    namespaced: true,
    state: {
        walletData: 0
    },
    getters: {
        getwalletData(state) {
            if (state.walletData !== null && state.walletData !== undefined) {
                return state.walletData;
            }
            return null;
        }
    },
    actions: {
        FetchUserwallet({ commit }, payload) {
            commit("auth/SET_LOADING", true, { root: true });
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
            WalletService.postPayment(payload).then(({data}) => {
                console.log(data);
            }).catch(error => {
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
        }
    }
};
