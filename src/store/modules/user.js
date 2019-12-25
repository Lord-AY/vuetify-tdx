import axios from 'axios'
export default {
	namespaced: true,
	state: {},
	getters: {},
	actions: {
		updateUser({ rootState, commit }, user) {
			//set loading
			commit('auth/SET_LOADING', true, { root: true })
			return axios
				.patch(`${rootState.baseUrl}/users/${rootState.auth.user.id}`, {
					firstname: user.firstname,
					lastname: user.lastname,
					email: user.email,
					phone: user.phone,
					address: user.address,
					token: rootState.auth.user.token
				})
				.then(({ data }) => {
					commit('auth/SET_LOADING', false, { root: true })
					console.log(data)
				})
				.catch(error => {
					commit('auth/SET_LOADING', false, { root: true })
					console.log(error)
				})
		},
		uploadProfileImage({ commit, rootState }, payload) {
			commit('auth/SET_LOADING', true, { root: true })
			return axios
				.put(`${rootState.baseUrl}/users/${payload.user.id}`, {
					pictureURL: payload.image
				})
				.then(({ data }) => {
					commit('auth/SET_LOADING', false, { root: true })
					console.log(data)
				})
				.catch(error => {
					commit('auth/SET_LOADING', false, { root: true })
					console.log(error)
				})
		}
	},
	mutations: {}
}
