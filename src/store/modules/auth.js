// import HTTP from '../../http'
import ash from "lodash";
import router from "../../router";
import axios from "axios";

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
    errors: null
  },

  getters: {
    loginErrors(state) {
      return state.loginErrors;
    },
    registerErrors(state) {
      return state.registerErrors;
    },
    isLoggedIn(state) {
      return !!state.user;
    },
    getUser(state) {
      return state.user;
    },
    firstName(state) {
      return state.user.firstname;
    },
    loading(state) {
      return !!state.loading;
    }
  },

  actions: {
    registerUser({ commit, state, rootState }, payload) {
      // set inputs to state
      commit("SET_REGISTER_STATE", payload);
      commit("SET_LOADING", true);
      return axios
        .post(`${rootState.baseUrl}/auth/signup`, {
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
          console.log(error.response);
          // check if error obj is empty
          if (ash.isEmpty(error.response.data)) {
            // if empty then user cant be found
            commit("SET_REGISTER_ERRORS", "please try again");
          } else {
            // else account not verified or something else
            commit("SET_REGISTER_ERRORS", error.response.data);
          }
        });
    },
    loginUser({ commit, state, rootState }, payload) {
      commit("SET_LOGIN_STATE", payload);
      commit("SET_LOADING", true);
      return axios
        .post(`${rootState.baseUrl}/auth/login`, {
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
            rcountry: data.rcountry
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
          } else {
            // else account not verified or something else
            commit("SET_LOGIN_ERRORS", error.response.data.message);
          }
        });
    },
    logoutUser({ commit, state, rootState }) {
      commit("SET_LOADING", true);
      return axios
        .post(`${rootState.baseUrl}/auth/logout/${state.user.token}`)
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
          router.push("/login");
        })
        .catch(error => {
          commit("SET_LOADING", false);
          // check if error obj is empty
          if (ash.isEmpty(error.response.data)) {
            // if empty then user cant be found
            commit(
              "SET_LOGOUT_ERRORS",
              "Error Destroying User Session, please try again"
            );
          } else {
            // else account not verified or something else
            commit("SET_LOGOUT_ERRORS", error.response.data.message);
          }
        });
    }

    // getVerificationCode({ state }) {
    // 	return axios
    // 		.get(
    // 			`http://157.245.82.193/auth/verification/${state.user.id}/${state.user.token}`
    // 		)
    // 		.then(response => {
    // 			console.log(response)
    // 		})
    // 		.catch(error => {
    // 			console.log(error)
    // 		})
    // }
  },

  mutations: {
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
