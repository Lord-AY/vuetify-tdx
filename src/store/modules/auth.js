import HTTP from '../../http'
import ash from 'lodash'
import router from '../../router'
// import axios from 'axios'
// import router from '../../router'
export default {
	namespaced: true,
	state: {
		registerData: {
			firstName: '',
			lastName: '',
			email: '',
			address: '',
			phone: '',
			password: '',
			confirmPassword: '',
			rcountry: '',
			pictureURL: ''
		},
		loginData: {
			email: '',
			password: ''
		},
		loginErrors: null,
		registerErrors: []
	},

	getters: {
		getLoginErrors(state) {
			return state.loginErrors
		},
		getRegisterErrors(state) {
			return state.registerErrors
		}
	},

	actions: {
		async registerUser({ commit, state, rootState }, payload) {
			// set inputs to state
			commit('SET_REGISTER_STATE', payload)
			try {
				const response = await HTTP().post('auth/signup', {
					firstname: state.registerData.firstName,
					lastname: state.registerData.lastName,
					email: state.registerData.email,
					address: state.registerData.address,
					phone: state.registerData.phone,
					password: state.registerData.password,
					rcountry: state.registerData.rcountry
				})
				// set user state with response
				commit('SET_USER_DATA', {
					resData: response.data,
					rootUser: rootState
				})
				// send user to dashboard
				router.push('/Dahsboard')
			} catch (error) {
				// check if error obj is empty
				if (ash.isEmpty(error.response.data)) {
					// if empty then user cant be found
					commit('SET_REGISTER_ERRORS', 'please try again')
				} else {
					// else account not verified or something else
					commit('SET_REGISTER_ERRORS', error.response.data)
				}
			}
		},
		async loginUser({ commit, state, rootState }, payload) {
			commit('SET_LOGIN_STATE', payload)
			try {
				const response = await HTTP().post('auth/login', {
					email: state.loginData.email,
					password: state.loginData.password
				})
				// set user state with response
				commit('SET_USER_DATA', {
					resData: response.data,
					rootUser: rootState
				})
				router.push('/Dashboard')
			} catch (error) {
				// check if error obj is empty
				if (ash.isEmpty(error.response.data)) {
					// if empty then user cant be found
					commit('SET_LOGIN_ERRORS', 'Account not found, please try again')
				} else {
					// else account not verified or something else
					commit('SET_LOGIN_ERRORS', error.response.data)
				}
			}
		}
	},

	mutations: {
		SET_REGISTER_STATE(state, { newUser }) {
			state.registerData.firstName = newUser.firstName
			state.registerData.lastName = newUser.lastName
			state.registerData.email = newUser.email
			state.registerData.address = newUser.address
			state.registerData.phone = newUser.phone
			state.registerData.password = newUser.password
			state.registerData.rcountry = newUser.rcountry
		},
		SET_LOGIN_STATE(state, { user }) {
			state.loginData.email = user.email
			state.loginData.password = user.password
		},
		SET_LOGIN_ERRORS: (state, errors) => (state.loginErrors = errors),
		SET_REGISTER_ERRORS: (state, errors) => (state.registerErrors = errors),
		SET_USER_DATA(resData, rootUser) {
			rootUser.user.id = resData.id
			rootUser.user.firstname = resData.firstname
			rootUser.user.lastname = resData.lastname
			rootUser.user.email = resData.email
			rootUser.user.token = resData.token
			rootUser.user.referalId = resData.referalId
			rootUser.user.status = resData.status
			rootUser.user.phone = resData.phone
		}
	}
}
