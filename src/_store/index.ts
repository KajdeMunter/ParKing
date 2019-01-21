import Vue from 'vue';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import { users } from './_modules/users.module';
import { alert } from './_modules/alert.module';
import { account } from './_modules/account.module';
import { markers } from './_modules/markers.module';

Vue.use(Vuex);
Vue.use(VeeValidate);

export default new Vuex.Store({
    modules: {
        users,
        alert,
        account,
        markers
    }
});
