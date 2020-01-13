import ProductService from "@/services/ProductService";
import ash from "lodash";
import router from "../../router";
import UserService from "../../services/UserService";
// import ash from 'lodash';
export default {
  namespaced: true,
  state: {
    products: [],
    comments: null,
    product: null,
    categories: null,
    subcategories: null,
    seller: null,
    similarProducts: [],
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
    paginatedProducts(state) {
      if (state.products !== null && state.products !== undefined) {
        let latest = state.products.reverse();
        return latest;
      }
      return;
    },
    categories(state) {
      const categories = state.categories;
      const subcategories = state.subcategories;
      if (categories !== null && categories !== undefined) {
        if(subcategories !== null && subcategories !== undefined && subcategories.length > 0) {
          for(let category in categories) {
            for ( let subcat in subcategories) {
              if(categories[category].id == subcategories[subcat].parent) {
                let subcategoryArr = [];
                subcategoryArr.push(subcategories[subcat]);
                //  categories[category].subcategory = subcategories[subcat]
                // console.log(categories);
              }
            }
        }
          console.log("returned after the loop");
          return categories;
        }
        return categories;
      }
      return;
    },
    getSimilarProds(state) {
      if (
        state.similarProducts !== null &&
        state.similarProducts !== undefined
      ) {
        return state.similarProducts;
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
      if (state.product !== null && state.product !== undefined) {
        return state.product;
      }
      return null;
    },
    comments(state) {
      let comments = state.comments;
      let products = state.products;
      if (comments !== null && comments !== undefined) {
        if (products !== null && products !== undefined) {
          for (let comment in comments) {
            for (let product in products) {
              if (products[product].id == comments[comment].pid) {
                comments[comment].products = products[product];
                // console.log(comments[comment]);
              }
            }
          }
          return comments;
        } else {
          return comments;
        }
      } else {
        return;
      }
    },
    productWithSeller(state) {
      let seller = state.seller;
      let product = state.product;
      if (product !== null && product !== undefined) {
        if (seller !== null && seller !== undefined) {
          product.seller = seller;
          return product;
        }
      }
      return;
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
            // console.log(product);
            const photosArr = ash.split(data[product].photos, ",", 7);
            data[product].photos = photosArr;
            // console.log(data);
          }

          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_PRODUCTS", data);
        })
        .catch(() => {
          commit("auth/SET_LOADING", false, { root: true });
          commit(
            "SET_ERRORS",
            "Network Error, Please make sure you are connected..."
          );
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
          commit("SET_ERRORS", "Network Error, error fetching ads categories");
        });
    },
    fetchSubCategories({commit}, payload) {
        commit("auth/SET_LOADING", true, { root: true });
         commit("SET_ERRORS", null);
         ProductService.subcategory(payload)
         .then(({data}) => {
          commit("auth/SET_LOADING", false, { root: true });
          let subcategories = data;
          // console.log(subcategories);
          commit("SET_SUBCATEGORIES", subcategories);
         }).catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", "Cant connect to server...");
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
        .catch(() => {
          commit(
            "SET_ERRORS",
            "Network Error, Please make sure you are connected..."
          );
          router.push("/gridlist");
        });
    },
    fetchSimilarProducts({ commit, rootState }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.similar(payload)
        .then(({ data }) => {
          for (let product in data) {
            // console.log(product);
            const photosArr = ash.split(data[product].photos, ",", 7);
            data[product].photos = photosArr;
          }
          // console.log(data);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_SIMILAR_PRODUCTS", data);
        })
        .catch(() => {
          // console.log(error);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", "Network Error, Error getting similar ads.");
        });
    },
    fetchAllComments({ commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      commit("SET_SUCCESS_MSG", null);
      return ProductService.comments()
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_COMMENTS", data);
          // console.log(data);
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(error.response.data);
        });
    },
    fetchSeller({ commit }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      return UserService.user(payload.sellerId)
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          let seller = data;
          commit("SET_SELLER", seller);
          // console.log(data)
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(error.response.data);
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
          router.push("/gridlist");
          // console.log(data);
        })
        .catch(error => {
          if (error.response.status == 500 || error.response.status == 404) {
            commit("auth/SET_LOADING", false, { root: true });
            commit("SET_ERRORS", "Network Error, Error creating ads.");
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
      state.similarProducts = data;
    },
    SET_SUCCESS_MSG(state, message) {
      state.success = message;
    },
    SET_SINGLE_PRODUCT(state, data) {
      state.product = data;
    },
    SET_COMMENTS(state, data) {
      state.comments = data;
    },
    SET_SELLER(state, data) {
      state.seller = data;
    },
    SET_SUBCATEGORIES(state, subcategories) {
      state.subcategories = subcategories;
    }
  }
};
