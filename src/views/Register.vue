<template>
    <div id="register">
        <img src="../assets/ParKing-Logo.png" class="logo" alt="none">
        <h4>Sign up. Save time. Save the world.</h4>
        <form @submit.prevent="handleSubmit">
            <div class="form-item">
                <span v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</span>
                <input placeholder="email" v-model="user.email"
                       v-validate="{ required: true, email: true }" name="email" class="form-in form-in--email"
                       :class="{ 'is-invalid': submitted && errors.has('email') }"/>
                <font-awesome-icon icon="envelope" class="form-icon"></font-awesome-icon>
            </div>
            <div class="form-item">
                <span v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}</span>
                <input type="password" placeholder="password" v-model="user.password"
                       v-validate="{ required: true, min: 8, max: 128 }" name="password" class="form-in form-in--password"
                       :class="{ 'is-invalid': submitted && errors.has('password') }"/>
                <font-awesome-icon icon="key" class="form-icon"></font-awesome-icon>
            </div>
            <div class="form-item">
                <div class="captcha-info">
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                </div>
                <vue-recaptcha
                        ref="recaptcha"
                        @verify="onCaptchaVerified"
                        @expired="onCaptchaExpired"
                        size="invisible"
                        sitekey="6LeUOIoUAAAAAHuWDxSAYryEF9nQRTSf-raV0OPR">
                </vue-recaptcha>
                <button class="button button__login" :disabled="status.registering">Register</button>
                <img v-show="status.registering"
                     src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                <router-link to="/login" class="button button__register">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	import VueRecaptcha from 'vue-recaptcha';
    import { mailCheck } from '../_services/user.service'
	import _ from 'lodash';

	export default {
		data() {
			return {
				user: {
					email: '',
					password: ''
				},
				submitted: false,
			}
		},
		watch: {
            // whenever email changes, this function will run
            'user.email'(newEmail, oldEmail) {
                this.debouncedGetAnswer()
            }
		},
		created() {
			// _.debounce is a function provided by lodash to limit how
			// often a particularly expensive operation can be run.
			// In this case. We wait until the user has completely
			// finished typing before making the ajax request.
			this.debouncedGetAnswer = _.debounce(this.getEmail, 500)
		},
		computed: {
			...mapState('account', ['status'])
		},
		methods: {
			...mapActions('account', ['register', 'mailCheck']),
			handleSubmit(e) {
				this.submitted = true;
				this.$refs.recaptcha.execute();
			},
			onCaptchaVerified(recaptchaToken) {
				this.$refs.recaptcha.reset();

				// Register user
				this.$validator.validate().then(valid => {
					const user = this.user;
					if (valid) {
						this.register({user, recaptchaToken});
					}
				});
            },
			getEmail() {
				this.mailCheck(this.user.email)
			},
			onCaptchaExpired() {
				this.$refs.recaptcha.reset();
			}
		},
        components: {
			VueRecaptcha
        }
	};
</script>

<style scoped lang="scss">
    #register {
        h4 {
            padding-top: 20px;
        }
    }

    .invalid-feedback {
        display: block;
    }

    .form {
        &-item {
            padding-top: 20px;

            .button {
                color: #ffffff;
                margin: 20px 10px;

                &__register {
                    &:hover {
                        color: #ffffff;
                        outline-color: #ffffff;
                    }
                }

                &__login {
                    background: rgb(153, 153, 153);
                    border: none;
                    transition: 0.3s;
                    border-radius: 5px;
                    padding: 5px 10px;

                    &:hover {
                        background: darken(#ffffff, 50%);
                    }

                    &:active {
                        background: darken(#ffffff, 60%);
                    }
                }
            }
        }
        &-in {
            border: none;
            background: none;
            border-bottom: 1px solid #ffffff;
            color: #ffffff;

            &::placeholder {
                color: #ffffff;
            }
        }
        &-icon {
            position: absolute;
            margin-left: -15px;
            margin-top: 5px;
        }
    }

    // Fix the autofill messing everything up
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: white !important;
    }
</style>
