<template>
	<div class="login">
		<Login
			:loginFields="loginData"
			:submit="sendLoginData"
			:errors="errors"
		></Login>
	</div>
</template>

<script>
import Login from '@/components/auth/signin'
import { mapActions, mapGetters } from 'vuex'
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
			loginError: null
		}
	},
	components: {
		Login
	},
	computed: {
		...mapGetters('auth', {
			errors: 'getLoginErrors'
		})
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
