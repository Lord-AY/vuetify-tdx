import CartService from '@/services/CartService';
// default state for resetting
const DefaultState = () => {
    return {
        cartProducts: [],
        cartLoading: false,
        message: null,
        error: null,
    }

};
// changeable state for cart
const state = DefaultState();
// getters, for getting stuff na, isnt that explanatory for u.
const getters = {
    getLoading(state) {
        if (state.cartLoading !== null && state.cartLoading !== undefined) {
            return state.cartLoading;
        }
        return false;
    },
    getMessages(state) {
        if (state.message !== null && state.message !== undefined) {
            return state.message;
        }
        return null;
    },
     getErrors(state) {
        if (state.error !== null && state.error !== undefined) {
            return state.error;
        }
        return null;
    }
};
// actions for taking actions, u sabi na.
const actions = {
    addProductToCart({
        commit
    }, payload) {
        commit('SET_LOADING', true);
        CartService.cartAdd(payload)
            .then(({
                data
            }) => {
                commit('SET_LOADING', false);
                commit('SET_MESSAGE', "Product successfully added to your cart.");
                // console.log(data);
            }).catch(error => {
                // console.log(error);
                commit('SET_LOADING', false);
                if (error.response.status == 404) {
                    commit('SET_ERROR_MSG', "Network Error, Please try again...");
                } else {
                    commit('SET_ERROR_MSG', error.data.message);
                }
            })
    }
};
// mutations for changing state.
const mutations = {
    resetState(state) {
        Object.assign(state, DefaultState());
    },
    SET_LOADING(state, loading) {
        state.cartLoading = loading;
    },
    SET_MESSAGE(state, feedback) {
        state.message = feedback;
    },
    SET_ERROR_MSG(state, feedback) {
        state.error = feedback;
    }
};

// finally exports to the vuex store, sweet
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};