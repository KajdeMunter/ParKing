<template>
        <div>
            <img src="../assets/ParKing-Logo.png" class="logo" alt="none">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <input  placeholder="email" type="text" v-model="email" id="email" name="email" class="form-input form-input--email" :class="{ 'is-invalid': submitted && !email }" />
                    <font-awesome-icon icon="envelope" class="form-input--email__icon-envelope"></font-awesome-icon>
                    <div v-show="submitted && !email" class="invalid-feedback">email is required</div>
                </div>
                <div class="form-group">
                    <input placeholder="password" type="password" v-model="password" name="password" id="pass" class="form-input form-input--password" :class="{ 'is-invalid': submitted && !password }" />
                    <font-awesome-icon icon="key" class="form-input--password__icon-key"></font-awesome-icon>
                    <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                </div>
                <div class="form-group">
                    <button class="button button__login" :disabled="status.loggingIn">Login</button>
                    <img v-show="status.loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    <router-link to="/register" class="button button__register">Register</router-link>
                </div>
            </form>
        </div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	export default {
		data () {
			return {
				email: '',
				password: '',
				submitted: false
			}
		},
		computed: {
			...mapState('account', ['status'])
		},
		created () {
			// reset login status
			this.logout();
		},
		methods: {
			...mapActions('account', ['login', 'logout']),
			handleSubmit (e) {
				this.submitted = true;
				const { email, password } = this;
				if (email && password) {
					this.login({ email, password })
				}
			}
		}
	};
</script>


<style lang="scss">
    .form-input {
        border: none;
        background: none ;
        border-bottom: 1px solid #ffffff;
        position: relative;
        alignment: center;
        color: #ffffff;
        padding-right: 17px;

        &::placeholder{
            color: #ffffff;
            align-items: center;
        }
    }
    
    .form-group {
        alignment: center;
        padding-top: 5px;
        padding-bottom: 0;
        margin-bottom: 0;
        position: relative;
        left: 10px;
        
        .form-input {
            &--email {
                margin-right: 15px;
                margin-top: 25px;
                alignment: center;
                padding-top: 20px;
                
                &__icon-envelope {
                    alignment: left;
                    position: relative;
                    bottom: 25px;
                    left: 70px;
                }
            }
            &--password {
                padding-top: 10px;
                margin-top: 30px;
                margin-left: 40px;
                margin-right: 15px;
                alignment: center;
                position: relative;
                right: 35px;
                
                &__icon-key {
                    alignment: left;
                    position: relative;
                    margin-left: 40px;
                    margin-top: 25px;
                    border-bottom: 1px #ffffff;
                    bottom: 45px;
                    left: 50px;
                }
            }
        }
    }

    input[type="password"]:focus{
        -webkit-appearance: none;
        outline: none 0;
    }

    input[type="text"]:focus{
        -webkit-appearance: none;
        outline: none;
    }

    .button {
        color: #ffffff;
        position: relative;
        top: 20px;
        alignment: center;

        &__register {
            position: relative;
            right: 40px;
            margin-top: 15px;
            top: 60px;
        }

        &__login {
            background: rgb(153,153,153);
            border: none;
            position: relative;
            top: 20px;
            left: 17px;
            transition: 0.5s;
            outline: rgb(0,102,51);
            alignment: center;
            padding: 5px 10px;
            border-radius: 5px;

            &:focus {
                background-color: rgb(153,153,153);
                color: #ffffff;
                border: #ffffff;
                text-decoration: underline;
                outline-color: #ffffff;
                transition-property: background-color;
            }

            &:hover {
                background-color:  rgb(200,193,198);
            }

            &:active {
                color: rgb(0,153,51);
                background-color: rgb(153,153,153);
                outline-color: #ffffff;
            }
        }
    }
    
    .logo {
        width: 200px;
        height: auto;
        position: relative;
        right: 15px;
        alignment: center;
    }
    </style>