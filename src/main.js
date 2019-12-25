import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import VuePromiseBtn from 'vue-promise-btn'
import 'vue-promise-btn/dist/vue-promise-btn.css'

Vue.config.productionTip = false
Vue.use(VuePromiseBtn)

sync(store, router)
new Vue({
	router,
	store,
	render: h => h(App),
	watch: {
		$route(to) {
			if (to.currentRoute.meta.reload == true) {
				window.location.reload()
			}
		}
	}
}).$mount('#app')
