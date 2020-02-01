import ProductService from "@/services/ProductService";
import ash from "lodash";
import router from "../../router";
import UserService from "../../services/UserService";
import {_} from 'vue-underscore';
// import ash from 'lodash';
export default {
  namespaced: true,
  state: {
    products: [],
    comments: null,
    productComments: null,
    product: null,
    categories: null,
    subcategories: null,
    seller: null,
    similarProducts: [],
    success: null,
    errors: null,
    singleCategory: null,
    hotSellers: null
  },
  getters: {
    productListings(state) {
      if (state.products !== null && state.products !== undefined) {
        return state.products;
      }
      return;
    },
    getSingleCategory(state) {
      if (state.singleCategory !== null && state.singleCategory !== undefined) {
        return state.singleCategory;
      }
      return;
    },
    getHotSellers(state) {
      if (state.hotSellers !== null && state.hotSellers !== undefined) {
        return state.hotSellers;
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
    ProductsComment(state) {
      if (state.productComments !== null && state.productComments !== undefined) {
        let comments = state.productComments;
        return comments;
      }
      return;
    },
    subcategories(state){
      if (state.subcategories !== null && state.subcategories !== undefined) {
        let subcat = state.subcategories;
        return subcat;
      }
      return;
    },
    fullCategories(state) {
      const categories = state.categories;
      if(categories !== null && categories !== undefined ) {
        return categories;
      };
      return null;
    },
    categories(state) {
      const categories = state.categories;
      const subcategories = state.subcategories;
      const substore = []
      if (categories !== null && categories !== undefined) {
        if(subcategories !== null && subcategories !== undefined && subcategories.length > 0) {
          for(let category in categories) {
            for( let subcat in subcategories) {
              if(categories[category].id == subcategories[subcat].parent){
                substore.push(subcategories[subcat]);
                categories[category].subcategory = substore;
              }
            }
          }
          // console.log("returned after the loop");
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
      var myarr = [];
      let comments = state.comments;
      let products = state.products;
      // console.log(products);
      // console.log(comments);
      // console.log(products);
      // var mergedList = _.map(comments, function(item){
      //     return _.extend(item, _.findWhere(products, { id: item.pid }));
      // });
      // console.log(mergedList);
      if (comments !== null && comments !== undefined) {
        if (products !== null && products !== undefined) {
          for (let comment in comments) {
            for (let product in products) {
              if (products[product].id == comments[comment].pid) {
                comments[comment].products = products[product];
                myarr.push(comments[comment]);
              }
            }
          }
          // console.log(myarr);
          return myarr;
        } else {
          return null;
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
    fetchHotSellers({ commit }) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.hotsellers()
        .then(({ data }) => {
          //   console.log(data);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_HOT_SELLERS", data);
        })
        .catch(error => {
          // console.log(error); 
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", "Network Error, error fetching ads categories");
        });
    },
    fetchSingleCategory({ commit }, payload) {
      // console.log(payload)
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.singleCategory(payload)
        .then(({ data }) => {
            // console.log(data);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_SINGLE_CATEGORIES", data);
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
    selectedProduct({ commit, dispatch }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return ProductService.product(payload)
        .then(({ data }) => {
          const photosArr = ash.split(data.photos, ",", 7);
          data.photos = photosArr;
          commit("auth/SET_LOADING", true, { root: true });
          commit("SET_SINGLE_PRODUCT", data)
        })
        .catch(() => {
          commit(
            "SET_ERRORS",
            "Network Error, Please make sure you are connected..."
          );
          router.push("/gridlist");
        });
    },
    fetchSimilarProducts({ commit, rootState, state }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      const refinedPayload = {
        cid: payload.cid,
        id: payload.id
      }
      // console.log(refinedPayload);
      return ProductService.similar(refinedPayload)
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
          // console.log(error.response.data);
        });
    },
    fetchCommentUser({commit}, payload){
      // console.log("we eneterd");
      const payload2 = JSON.parse(JSON.stringify(payload));
      // console.log(payload2[0]);
      const fetchedComment = []
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      commit("SET_SUCCESS_MSG", null);
      return UserService.user(payload2[0].user)
        .then(({ data }) => {
          const data2 = JSON.parse(JSON.stringify(data))
          const joined = Object.assign(data2, payload2[0]);
          fetchedComment.push(joined);
          // console.log(joined);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_PRODUCT_COMMENTS", fetchedComment);
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          // console.log(error.response.data);
        });
    },
    fetchCommentForProduct({ commit, dispatch }, payload){
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      commit("SET_SUCCESS_MSG", null);
      ProductService.singleProductcomments(payload.id)
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          dispatch("fetchCommentUser",data)
          // console.log(data);
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          // console.log(error.response.data);
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
          // console.log(error.response.data);
        });
    },
    createProduct({ commit, rootState }, payload ) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      commit("SET_SUCCESS_MSG", null);
      // set payload details
      let checkFields = payload.product.checkFields;
      let inputFields = payload.product.inputFields;
      // convert object to comma seperated values
      let checkField = Object.keys(checkFields).map(function(k){return checkFields[k]}).join(",");
      let inputField = Object.keys(inputFields).map(function(k){return inputFields[k]}).join(",");

      const product = {
        cid: payload.product.cid,
        uid: rootState.auth.user.id,
        name: payload.product.name,
        photos: payload.product.photos,
        videos: [],
        inputFields: inputField,
        checkFields: checkField,
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
      console.log(product);
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
    SET_HOT_SELLERS(state, data) {
      state.hotSellers = data;
    },
    SET_SINGLE_CATEGORIES(state, data) {
      state.singleCategory = data;
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
    SET_PRODUCT_COMMENTS(state, data) {
      state.productComments = data;
    },
    SET_SELLER(state, data) {
      state.seller = data;
    },
    SET_SUBCATEGORIES(state, subcategories) {
      state.subcategories = subcategories;
    }
  }
};
