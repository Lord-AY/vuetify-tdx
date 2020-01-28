import SearchService from "@/services/SearchService";
import ash from "lodash";
// import router from "../../router";
// import UserService from "../../services/UserService";
// import ash from 'lodash';
export default {
    namespaced: true,
    state: {
        results: null,
        success: null,
        errors: null
    },
    getters: {
        getResults(state) {
            if (
                state.results == null &&
                state.results == undefined && 
                state.results.length <= 0
            ) {
                return null;
            }
            return state.results;
        }
    },
    actions: {
        searchAction({ commit }, payload) {
            commit("auth/SET_LOADING", true, { root: true });
            commit("SET_SUCCESS_MSG", null);
            commit("SET_ERRORS", null);
            SearchService.search(payload.keyword)
                .then(({ data }) => {
                    commit("auth/SET_LOADING", false, { root: true });
                    commit("SET_SUCCESS_MSG", "Search Successfull");
                    commit("SET_SEARCH_RESULTS", data);
                })
                .catch(error => {
                    commit("auth/SET_LOADING", false, { root: true });
                    commit("SET_ERRORS", error.response.data);
                });
        }
    },
    mutations: {
        SET_SUCCESS_MSG(state, message) {
            state.success = message;
        },
        SET_ERRORS(state, message) {
            state.errors = message;
        },
        SET_SEARCH_RESULTS(state, results) {
            state.results = results;
        }
    }
};
