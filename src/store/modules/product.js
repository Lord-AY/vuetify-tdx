import ProductService from "@/services/ProductService";
import ash from "lodash";
import router from "../../router";
// import ash from 'lodash';
export default {
  namespaced: true,
  state: {
    products: null,
    product: null,
    categories: null,
    similarproducts: null,
    success: null,
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
    singleProduct(state) {
      return state.product;
    }
  },
  actions: {
    fetchAllProducts({ commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_SUCCESS_MSG", null);
      commit("SET_ERRORS", null);
      return ProductService.products()
        .then(({ data }) => {
          for (let product in data) {
            console.log(product);
            const photosArr = ash.split(data[product].photos, ",", 7);
            data[product].photos = photosArr;
          }

          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_PRODUCTS", data);
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", error);
        });
    },
    fetchAllCategories({ commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.categories()
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
    selectedProduct({ commit }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.product(payload)
        .then(({ data }) => {
          const photosArr = ash.split(data.photos, ",", 7);
          data.photos = photosArr;
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_SINGLE_PRODUCT", data);
        })
        .catch(error => {
          commit("SET_ERRORS", error.response.data);
          router.push("/gridlist");
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
    },
    createProduct({ commit, rootState }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      commit("SET_SUCCESS_MSG", null);
      // set payload details
      const product = {
        cid: payload.product.cid,
        uid: rootState.auth.user.id,
        name: payload.product.name,
        photos: payload.product.photos,
        videos: [],
        region: payload.product.region || "Nigeria",
        currency: "Naira",
        creator:
          rootState.auth.user.firstname + " " + rootState.auth.user.lastname,
        price: null,
        amount: payload.product.amount,
        negotiable: payload.product.negotiable,
        subcategory: null,
        featured: false,
        tradexplorer: true,
        adType: payload.product.adType,
        paymentType: 1,
        approved: true,
        published: true,
        description: payload.product.description,
        keywords: [],
        canExchange: false
      };
      return ProductService.createProduct(product, rootState.auth.user.token)
        .then(() => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_SUCCESS_MSG", "Your Ads have Successfully been created.");
          // console.log(data);
        })
        .catch(error => {
          if (error.response.status == 500 || error.response.status == 404) {
            commit("auth/SET_LOADING", false, { root: true });
            commit("SET_ERRORS", {
              message: "Network Error, Please try again."
            });
          } else if (error.response.status == 400) {
            commit("auth/SET_LOADING", false, { root: true });
            commit("SET_ERRORS", error.response.data);
            // console.log(error.response.data);
          } else {
            commit("auth/SET_LOADING", false, { root: true });
            commit("SET_ERRORS", error.response.data);
          }
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
    },
    SET_SUCCESS_MSG(state, message) {
      state.success = message;
    },
    SET_SINGLE_PRODUCT(state, data) {
      state.product = data;
    }
  }
};
