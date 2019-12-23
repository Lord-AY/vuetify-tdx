import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		baseUrl: 'http://157.245.82.193',
		user: {
			id: '',
			token: '',
			firstname: '',
			lastname: '',
			email: '',
			status: '',
			referalId: '',
			phone: ''
		}
	},
	modules,
	getters: {
		isLoggedIn(state) {
			return !!state.user.token
		}
	},
	plugins: [createPersistedState()]
})
