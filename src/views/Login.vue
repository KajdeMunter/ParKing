<template>
    <div>
        <img src="../assets/ParKing-Logo.png" class="logo" alt="none">
        <form @submit.prevent="handleSubmit" class="form-login">
            <div class="form-item">
                <input placeholder="email" type="text" v-model="email" name="email" class="form-in form-in--email" :class="{ 'is-invalid': submitted && !email }"/>
                <font-awesome-icon icon="envelope" class="form-icon"></font-awesome-icon>
                <div v-show="submitted && !email" class="invalid-feedback">email is required</div>
            </div>
            <div class="form-item">
                <input placeholder="password" type="password" v-model="password" name="password" class="form-in form-in--password" :class="{ 'is-invalid': submitted && !password }"/>
                <font-awesome-icon icon="key" class="form-icon"></font-awesome-icon>
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
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
                <button class="button button__login" :disabled="status.loggingIn">Login</button>
                <img v-show="status.loggingIn"
                     src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                <div class="form-register">
                    Don't have an account? <router-link to="/register" class="button button__register">Register now</router-link>!
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        data() {
            return {
                email: '',
                password: '',
                submitted: false
            }
        },
        computed: {
            ...mapState('account', ['status'])
        },
        created() {
            // reset login status
            this.logout();
        },
        methods: {
            ...mapActions('account', ['login', 'logout']),
            handleSubmit(e) {
                this.submitted = true;
	            this.$refs.recaptcha.execute();
            },
	        onCaptchaVerified(recaptchaToken) {
		        this.$refs.recaptcha.reset();

		        const {email, password} = this;
		        if (email && password) {
			        this.login({email, password, recaptchaToken})
		        }
	        },
	        onCaptchaExpired () {
		        this.$refs.recaptcha.reset();
	        }
        },
	    components: {
		    VueRecaptcha
	    }
    };
</script>

<style scoped lang="scss">
    .form {
        &-item {
            padding-top: 20px;

            .button {
                &__register {
                    color: #ffffff;
                    text-decoration: underline;

                    &:hover {
                        color: #ffffff;
                        outline-color: #ffffff;
                    }
                }

                &__login {
                    margin: 20px 10px;
                    color: #ffffff;
                    background: darken(#ffffff, 40%);
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