import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate';
import { users } from './_modules/users.module'
import { alert } from './_modules/alert.module'
import { account } from './_modules/account.module'

Vue.use(Vuex);
Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from '../_helpers/fake-backend.js';
configureFakeBackend();

export default new Vuex.Store({
    modules: {
        users,
        alert,
        account
    }
})