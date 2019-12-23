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
      rcountry: "",
      pictureURL: ""
    },
    loginData: {
      email: "",
      password: ""
    },
    user: {
      id: "",
      token: "",
      firstname: "",
      lastname: "",
      email: "",
      status: "",
      referalId: "",
      phone: "",
      rcountry: "",
      address: "",
      vCode: null
    },
    loginErrors: null,
    registerErrors: []
  },

  getters: {
    getLoginErrors(state) {
      return state.loginErrors;
    },
    getRegisterErrors(state) {
      return state.registerErrors;
    },
    isLoggedIn(state) {
      return !!state.user.token;
    }
  },

  actions: {
    registerUser({ commit, state }, payload) {
      // set inputs to state
      commit("SET_REGISTER_STATE", payload);
      return axios
        .post("http://157.245.82.193/auth/signup", {
          firstname: state.registerData.firstName,
          lastname: state.registerData.lastName,
          email: state.registerData.email,
          address: state.registerData.address,
          phone: state.registerData.phone,
          password: state.registerData.password,
          rcountry: state.registerData.rcountry
        })
        .then(({ data }) => {
          // set user state with results
          commit("setUserData", data);
          // send user to dashboard
          router.push("/maindashboard");
        })
        .catch(error => {
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
    loginUser({ commit, state }, payload) {
      commit("SET_LOGIN_STATE", payload);
      return axios
        .post("http://157.245.82.193/auth/login", {
          email: state.loginData.email,
          password: state.loginData.password
        })
        .then(({ data }) => {
          // set user state with results
          commit("setUserData", data);
          // send user to home
          router.push("/");
        })
        .catch(error => {
          // check if error obj is empty
          if (ash.isEmpty(error.response.data)) {
            // if empty then user cant be found
            commit("SET_LOGIN_ERRORS", "Account not found, please try again");
          } else {
            // else account not verified or something else
            commit("SET_LOGIN_ERRORS", error.response.data);
          }
        });
    },
    getVerificationCode({ state }) {
      return axios
        .get(
          `http://157.245.82.193/auth/verification/${state.user.id}/${state.user.token}`
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateUser(user) {
      return axios
        .put(`http://157.245.82.193/users/${user.id}`, {})
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
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
    setUserData(state, data) {
      state.user.id = data.id;
      state.user.firstname = data.firstname;
      state.user.lastname = data.lastname;
      state.user.email = data.email;
      state.user.token = data.token;
      state.user.referalId = data.referalId;
      state.user.status = data.status;
      state.user.phone = data.phone;
      state.user.address = data.address;
      state.user.rcountry = data.rcountry;
    }
  }
};
