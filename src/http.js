import axios from 'axios'
import store from './store'

export default () =>
	axios.create({
		baseURL: store.state.baseUrl,
		timeout: 35000,
		headers: {
			Authorization: `Bearer ${store.state.user.token}`,
			Accept: 'application/json',
		}
	})