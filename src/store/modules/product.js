// import http from '../../http'
import axios from 'axios'

export default {
	namespaced: true,
	state: {
		products: null,
		errors: null
	},
	getters: {
		productListings(state) {
			if (state.products !== null && state.products !== undefined) {
				return state.products
			}
			return
		}
	},
	actions: {
		fetchAllProducts({ rootState, commit }) {
			commit('auth/SET_LOADING', true, { root: true })
			return axios
				.get(`${rootState.baseUrl}/product/product`, {
					headers: {
						'x-access-token': rootState.auth.user.token
					}
				})
				.then(({ data }) => {
					commit('auth/SET_LOADING', false, { root: true })
					commit('SET_PRODUCTS', data)
				})
				.catch(error => {
					commit('auth/SET_LOADING', false, { root: true })
					commit('SET_ERRORS', error.response.message)
				})
		}
	},
	mutations: {
		SET_PRODUCTS(state, data) {
			state.products = data
		},
		SET_ERRORS(state, errors) {
			state.errors = errors
		}
	}
}
