import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  state: {
    baseUrl: 'http://157.245.82.193'
  },
  modules,
  plugins: [createPersistedState()]
})