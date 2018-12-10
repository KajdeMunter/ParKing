<template>
    <div id="app">
        <router-view></router-view>
        <nav-bar></nav-bar>
    </div>
</template>
<script>
    import NavBar from './components/NavBar';
    export default {
        components: {NavBar}
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
        color: #2c3e50;
        background-color: #006633;
    }
</style>
