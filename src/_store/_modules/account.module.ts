import Vue from 'vue';
import Vuex from 'vuex';
import { userService} from '../../_services/user.service.js';
import { router } from '../../router';

const user = JSON.parse(localStorage.getItem('user'));

interface UserState {
    status: {
        loggedIn?: boolean
        registering?: boolean
        loggingIn?: boolean
    };
    user: string|null;
}

const state: UserState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };

Vue.use(Vuex);

// The initial logged in state of the user is set by checking if the user is saved in local storage,
// which keeps the user logged in if the browser is refreshed and between browser sessions.
export const account = {
    namespaced: true,
    state,
    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        },
        registerRequest(state, user) {
            state.status = { registering: true };
        },
        registerSuccess(state, user) {
            state.status = {};
        },
        registerFailure(state, error) {
            state.status = {};
        }
    },
    actions: {
        login({ dispatch, commit }, { email, password, recaptchaToken }) {
            commit('loginRequest', { email });

            userService.login(email, password, recaptchaToken)
                .then(
                    (user) => {
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    (error) => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        },
        register({ dispatch, commit }, { user, recaptchaToken }) {
            commit('registerRequest', user);
            userService.register(user, recaptchaToken)
                .then(
                    (user) => {
                        commit('registerSuccess', user);
                        router.push('/login');
                        setTimeout(() => {
                            // display success message after route change completes
                            dispatch('alert/success', 'Registration successful', { root: true });
                        });
                    },
                    (error) => {
                        commit('registerFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
        mailCheck({ dispatch, commit }, email) {
            userService.mailCheck(email)
                .then(
                    (response) => {
                        // display success message after route change completes
                        if ((email.indexOf('@') === -1) || (email.indexOf('.') === -1)) {
                            return;
                        } else {
                            dispatch('alert/success', 'Email is available', { root: true });
                        }
                    },
                    (error) => {
                        commit('registerFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                );
        },
    }
};
