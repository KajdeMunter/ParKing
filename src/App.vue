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

</style>
