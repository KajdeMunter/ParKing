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
        font-family: "Yu Gothic UI", "Yu Gothic UI Light", serif;
        font-feature-settings: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;
    }

    .app-bg {
        background-image: linear-gradient(to bottom right, #006633, #00bd52);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        height: 100%;
        width: 100%;
    }
</style>
