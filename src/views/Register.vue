<template>
    <div>
        <img src="../assets/ParKing-Logo.png" class="logo" alt="none">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input type="email" placeholder="email" v-model="user.email" v-validate="{ required: true, email: true }" id="email"
                       name="email" class="form-input form-input--email" :class="{ 'is-invalid': submitted && errors.has('email') }"/>
                        <font-awesome-icon icon="envelope" class="form-input--email__icon-envelope"></font-awesome-icon>
                <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
            </div>
            <div class="form-group">
                <input type="password" placeholder="password" v-model="user.password" v-validate="{ required: true, min: 8 }" name="password"
                       class="form-input form-input--password" :class="{ 'is-invalid': submitted && errors.has('password') }"/>
                        <font-awesome-icon icon="key" class="form-input--password__icon-key"></font-awesome-icon>
                <div v-if="submitted && errors.has('password')" class="invalid-feedback">{{ errors.first('password') }}
                </div>
            </div>
            <div class="form-group">
                <button class="button--register" :disabled="status.registering">Register</button>
                <img v-show="status.registering"
                     src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                <router-link to="/login" class="button--cancel">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
    import { mailCheck } from '../_services/user.service'

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
                this.answer = 'Waiting for you to stop typing...';
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
				this.$validator.validate().then(valid => {
					if (valid) {
						this.register(this.user);
					}
				});
			},
			getEmail () {
				this.mailCheck(this.user.email)
			}
		},
	};
</script>

<style lang="scss">
    .form-group {
        width: 200px;
        alignment: center;
        position: center;
        margin: auto;

        .button--register{
            background-color: rgb(153,153,153);
            color: #ffffff;
            border: none;
            border-radius: 5px;
            padding: 5px 10px;
            margin: 10px 8px;
        }
        .button--cancel{
            color: #ffffff;
        }

        .button--register:active{
            outline-color: rgb(200,193,198);
            box-shadow: none;
            border: none;
        }

        .button--register:focus{
            outline-color: rgb(200,193,198);
            box-shadow: none;
            border: none;
        }

        .button--register:hover{
            text-decoration: underline;
        }

        .button--register:active:focus{
            box-shadow: none;
            border: none;
            text-decoration: underline;
        }
    }

    .form-input {
        border: none;
        background: none;
        border-bottom: 1px solid #ffffff;
        position: relative;
        alignment: center;
        color: #ffffff;
        padding-right: 17px;

        &::placeholder {
            color: #ffffff;
            align-items: center;
        }
    }

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

    input[type="password"]:focus {
        -webkit-appearance: none;
        outline: none 0;
    }

    input[type="text"]:focus {
        -webkit-appearance: none;
        outline: none;
    }
</style>
