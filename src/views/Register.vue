<template>
	<div>
			<registerForm
			:formFields="signUp"
			:register="sendRegisterData"
			:items="items"
			:passwordErr="errors"
			:errors="registerErrors"
		></registerForm>
	</div>
</template>

<script>
import registerForm from '@/components/auth/register'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import ash from 'lodash'

export default {
	name: 'userRegister',
	data() {
		return {
			signUp: {
				firstName: '',
				lastName: '',
				email: '',
				address: '',
				phone: '',
				password: '',
				confirmPassword: '',
				rcountry: ''
			},
			items: [],
			errors: null
		}
	},
	components: {
		registerForm
	},
	computed: {
		...mapGetters('auth', {
			registerErrors: 'getRegisterErrors'
		})
	},
	created() {
		this.fetchCountries()
	},
	methods: {
		...mapActions('auth', ['registerUser']),
		sendRegisterData() {
			let verification = this.verifyPassword()
			if (verification) {
				const payload = {
					newUser: {
						firstName: this.signUp.firstName,
						lastName: this.signUp.lastName,
						email: this.signUp.email,
						address: this.signUp.address,
						phone: this.signUp.phone.replace(/ /g, ''),
						password: this.signUp.password,
						rcountry: this.signUp.rcountry
					}
				}
				this.registerUser(payload)
			} else {
				this.errors = 'Passwords does not match'
			}
		},
		verifyPassword() {
			let pass = this.signUp.password
			let verPass = this.signUp.confirmPassword
			if (ash.isEqual(pass, verPass)) {
				return true
			} else {
				return false
			}
		},
		async fetchCountries() {
			const res = await axios.get('https://restcountries.eu/rest/v2/all')
			this.items = res.data
		},
	}
}
</script>
