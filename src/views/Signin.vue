<template>
	<div class="login">
		<Login
			:loginFields="loginData"
			:submit="sendLoginData"
			:errors="loginError"
			:loading="loading"
		></Login>
	</div>
</template>

<script>
import Login from '@/components/auth/signin'
import { mapActions } from 'vuex'
export default {
	name: 'signin',
	components: {
		Login
	},
	data() {
		return {
			loginData: {
				email: '',
				password: ''
			},
			loginError: ''
		}
	},
	computed: {
		getErrors() {
			return this.$store.getters['auth/loginErrors']
		},
		loading() {
			return this.$store.getters['auth/loading']
		}
	},
	watch: {
		getErrors(value) {
			// passing back the function to watch for changes
			if (value !== null && value !== undefined) {
				this.loginError = value
				// console.log(this.loginErrors) this runs when there is a change in state... for testing sha
			}
		}
	},
	methods: {
		...mapActions('auth', ['loginUser']),
		sendLoginData() {
			const { email, password } = this.loginData
			const payload = {
				user: { email, password }
			}
			this.loginUser(payload)
		}
	}
}
</script>
