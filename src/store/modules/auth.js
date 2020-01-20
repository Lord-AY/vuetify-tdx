import ash from "lodash";
import router from "../../router";
// import axios from "axios";
import AuthService from "@/services/AuthService";

export default {
  namespaced: true,
  state: {
    registerData: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      password: "",
      confirmPassword: "",
      rcountry: ""
    },
    loginData: {
      email: "",
      password: ""
    },
    loading: false,
    user: null,
    loginErrors: null,
    registerErrors: null,
    errors: null,
    referee: null
  },

  getters: {
    errors(state) {
      if (state.errors !== null && state.errors !== undefined)
        return state.errors;
    },
    getLoginError(state) {
      if (state.loginErrors !== null && state.loginErrors !== undefined) {
        return state.loginErrors;
      }
    },
    logoutError(state) {
      return state.logoutError;
    },
    registerErrors(state) {
      return state.registerErrors;
    },
    getReferee(state) {
      return state.referee;
    },
    isLoggedIn(state) {
      if (ash.isEmpty(state.user) || state.user == null) {
        return false;
      }
      return !!state.user;
    },
    getUser(state) {
      if(state.user !== null && state.user !== undefined) {
      return state.user;
      }
      return null;
    },
    firstName(state) {
      if (ash.isEmpty(state.user) || state.user == null) {
        return false;
      }
      return state.user.firstname;
    },
    loading(state) {
      return state.loading;
    }
  },

  actions: {
    registerUser({ commit, state }, payload) {
      // set inputs to state
      commit("SET_REGISTER_STATE", payload);
      commit("SET_LOADING", true);
      return AuthService.register({
        firstname: state.registerData.firstName,
        lastname: state.registerData.lastName,
        email: state.registerData.email,
        address: state.registerData.address,
        phone: state.registerData.phone,
        password: state.registerData.password,
        rcountry: state.registerData.rcountry
      })
        .then(({ data }) => {
          commit("SET_LOADING", false);
          // set user state with results
          const newUser = {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            token: data.token,
            referalId: data.referalId,
            status: data.status,
            phone: data.phone,
            address: data.address,
            rcountry: data.rcountry
          };
          commit("SET_USER_DATA", newUser);
          // send user to dashboard
          router.push("/maindashboard");
        })
        .catch(error => {
          commit("SET_LOADING", false);
          // console.log(error.response);
          // check if error obj is empty
          if (ash.isEmpty(error.response.data)) {
            // if empty then user cant be found
            commit("SET_REGISTER_ERRORS", "please try again");
          } else if (error.response.status == 404) {
            commit("SET_REGISTER_ERRORS", "Network error, please try again");
          } else {
            // else account not verified or something else
            commit("SET_REGISTER_ERRORS", error.response.data);
          }
        });
    },
    fetchUserReferee({ commit }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      commit("SET_ERRORS", null);
      return AuthService.referee(payload.refcode)
        .then(({ data }) => {
          //   console.log(data);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_REFEREE", data);
        })
        .catch(error => {
          // console.log(error);
          commit("auth/SET_LOADING", false, { root: true });
          commit("SET_ERRORS", "Network Error, error fetching ads categories");
        });
    },
    loginUser({ commit, state }, payload) {
      commit("SET_LOGIN_STATE", payload);
      commit("SET_LOADING", true);
      return AuthService.login({
        email: state.loginData.email,
        password: state.loginData.password
      })
        .then(({ data }) => {
          // console.log(data)
          commit("SET_LOADING", false);
          commit("SET_LOGIN_ERRORS", null);
          // set user state with results
          const loggedUser = {
            id: data.id,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            token: data.token,
            referalId: data.referalId,
            status: data.status,
            phone: data.phone,
            address: data.address,
            rcountry: data.rcountry,
            pictureUrl: data.pictureUrl,
            activation: data.activation
          };
          commit("SET_USER_DATA", loggedUser);
          // send user to home
          router.push("/");
        })
        .catch(error => {
          commit("SET_LOADING", false);
          // check if error obj is empty
          if (ash.isEmpty(error.response.data)) {
            // if empty then user cant be found
            commit("SET_LOGIN_ERRORS", "Account not found, please try again");
          } else if (error.response.status == 404) {
            commit("SET_LOGIN_ERRORS", "Network error, please try again");
          } else {
            // else account not verified or something else
            commit("SET_LOGIN_ERRORS", error.response.data.message);
          }
        });
    },
    resetUser({ commit, state }, payload) {
      commit("SET_LOGIN_STATE", payload);
      commit("SET_LOADING", true);
      return AuthService.reset({
        email: payload.email
      })
        .then(({ data }) => {
          // console.log(data)
          commit("SET_LOADING", false);
          // commit("SET_LOGIN_ERRORS", null);
          // set user state with results
          commit("SET_LOGIN_ERRORS", "Check your mail for The reset link");
          // send user to home
          // router.push("/login");
        })
        .catch(error => {
          commit("SET_LOADING", false);
          // check if error obj is empty
          if (ash.isEmpty(error.response.data)) {
            // if empty then user cant be found
            commit("SET_LOGIN_ERRORS", "Account not found, please try again");
          } else if (error.response.status == 404) {
            commit("SET_LOGIN_ERRORS", "Network error, please try again");
          } else {
            // else account not verified or something else
            commit("SET_LOGIN_ERRORS", error.response.data.message);
          }
        });
    },
    logoutUser({ commit, rootState }) {
      commit("SET_LOADING", true);
      return AuthService.logout({
        id: rootState.auth.user.id
      })
        .then(() => {
          // console.log(data)
          commit("SET_LOADING", false);
          commit("SET_LOGIN_ERRORS", null);
          commit("SET_REGISTER_ERRORS", null);
          // set user state with results
          commit("SET_USER_DATA", null);
          commit("RESET_REGISTER_STATE", null);
          commit("RESET_LOGIN_STATE", null);
          // send user to login page
          // router.push("/login");
          window.location.href = "/#/login";
        })
        .catch(error => {
          commit("SET_LOADING", false);
          // check if error obj is empty
          // else account not verified or something else
          commit(
            "SET_LOGOUT_ERRORS",
            "Error logging out your account, please try again."
          );
        });
    }
  },

  mutations: {
    SET_REFEREE(state, data) {
      state.referee = data;
    },
    SET_REGISTER_STATE(state, { newUser }) {
      state.registerData.firstName = newUser.firstName;
      state.registerData.lastName = newUser.lastName;
      state.registerData.email = newUser.email;
      state.registerData.address = newUser.address;
      state.registerData.phone = newUser.phone;
      state.registerData.password = newUser.password;
      state.registerData.rcountry = newUser.rcountry;
    },
    SET_LOGIN_STATE(state, { user }) {
      state.loginData.email = user.email;
      state.loginData.password = user.password;
    },
    SET_RESET_SUCCESS:(state, success) => (state.loginErrors = success),
    SET_LOGIN_ERRORS: (state, errors) => (state.loginErrors = errors),
    SET_REGISTER_ERRORS: (state, errors) => (state.registerErrors = errors),
    SET_USER_DATA(state, loggedUser) {
      state.user = loggedUser;
    },
    SET_LOADING: (state, loading) => (state.loading = loading),
    RESET_REGISTER_STATE(state, nullVal) {
      state.registerData.firstName = nullVal;
      state.registerData.lastName = nullVal;
      state.registerData.email = nullVal;
      state.registerData.address = nullVal;
      state.registerData.phone = nullVal;
      state.registerData.password = nullVal;
      state.registerData.confirmPassword = nullVal;
      state.registerData.rcountry = nullVal;
    },
    RESET_LOGIN_DATA(state, nullval) {
      state.loginData.email = nullval;
      state.loginData.password = nullval;
    },
    SET_LOGOUT_ERRORS(state, error) {
      state.errors = error;
    }
  }
};
