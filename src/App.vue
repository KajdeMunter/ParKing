<template>
    <div id="app">
        <div class="app-bg">
            <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
            <router-view></router-view>
            <nav-bar v-if="account.status.loggedIn"></nav-bar>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import NavBar from "./components/NavBar";

    export default {
        name: 'app',
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account,
            }),
        },
        methods: {
            ...mapActions({
                clearAlert: 'alert/clear',
            }),
        },
        watch: {
            $route(to, from) {
                // clear alert on location change
                this.clearAlert();
            },
        },
        components: {
            NavBar,
        },
    };
</script>

<style lang="scss">
    @import '~bootstrap-scss/bootstrap';

    #app {
        font-family: "arial", sans-serif;
        text-align: center;
        color: #fff;
    }

    .app-bg {
        background: linear-gradient(to bottom right, #006633, #00bd52) center center no-repeat;
        width: 100%;
        min-height: 100%;
        position: absolute;
        padding-bottom: 34px;
    }

    // ReCaptcha styling
    .grecaptcha-badge {
        visibility: collapse !important;
    }

    .captcha-info {
        color: #aaaaaa;
        font-size: .7em;
        padding: 0 10px;
    }
</style>
