import ProductService from "@/services/ProductService";

export default {
  namespaced: true,
  state: {
    products: null,
    categories: null,
    similarproducts: null,
    errors: null
  },
  getters: {
    productListings(state) {
      if (state.products !== null && state.products !== undefined) {
        return state.products;
      }
      return;
    },
    categories(state) {
      if (state.categories !== null && state.categories !== undefined) {
        return state.categories;
      }
      return;
    }
  },
  actions: {
    fetchAllProducts({ rootState, commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      return ProductService.products(rootState.auth.user.token)
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_PRODUCTS", data);
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", error.response.message);
        });
    },
    fetchAllCategories({ rootState, commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.categories(rootState.auth.user.token)
        .then(({ data }) => {
          //   console.log(data);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_CATEGORIES", data);
        })
        .catch(error => {
          // console.log(error);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", error.response.message);
        });
    },
    similarProducts({ commit, rootState }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.similarProducts(payload, rootState.auth.user.token)
        .then(({ data }) => {
          // console.log(data);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_SIMILAR_PRODUCTS", data);
        })
        .catch(error => {
          // console.log(error);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", error.response.message);
        });
    }
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
    },
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },
    SET_SIMILAR_PRODUCTS(state, data) {
      state.similarproducts = data;
    }
  }
};
