import UserService from "@/services/UserService";

export default {
  namespaced: true,
  state: {
    errors: null,
    success: null,
    walletData: 0,
  },
  getters: {
    getUpdateSuccess(state) {
      if(state.success !== null && state.success !== undefined) {
        return state.success;
      }
      return;
    },
    getUpdateErrors(state) {
      if(state.errors !== null && state.errors !== undefined) {
        return state.errors;
      }
      return;
    },
  },
  actions: {
    updateUser({ rootState, commit }, user) {
      // set loading
      commit("auth/SET_LOADING", true, { root: true });
      // clear previous errors
      commit("SET_ERRORS", null);
      commit("SET_SUCCESS_MSG", null);
      return UserService.update(rootState.auth.user.id, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        address: user.address,
        token: rootState.auth.user.token
      })
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          // console.log(data);
          commit("SET_SUCCESS_MSG", "Successfully updated your profile");
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          if(error.status == 500) {
            commit("SET_ERRORS", "Server Error, Please Try Again...")
          }else if(error.status == 404 ) {
             commit("SET_ERRORS", "Network Error, Please make sure you are connected..")
          } else {
            commit("SET_ERRORS", "please try again...");
          }
        });
    },
    uploadProfileImage({ commit }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      return UserService.update(payload.user.id, {
        pictureUrl: payload.image
      })
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(data);
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(error.response);
        });
    },
    FetchUser({ commit }, payload) {
      commit("auth/SET_LOADING", true, { root: true });
      return UserService.user(payload.userId)
        .then(({ data }) => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(data);
        })
        .catch(error => {
          commit("auth/SET_LOADING", false, { root: true });
          console.log(error);
        });
    },
  },
  mutations: {
    SET_ERRORS(state, error) {
      state.errors = error;
    },
    SET_USER_WALLET(state, error) {
      state.walletData = error;
    },
    SET_SUCCESS_MSG(state, success) {
      state.success = success;
    }
  }
};
