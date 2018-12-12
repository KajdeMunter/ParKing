<template>
    <div id="app">
        <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <router-view></router-view>
        <nav-bar></nav-bar>
    </div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import NavBar from './components/NavBar';

	export default {
		name: 'app',
		computed: {
			...mapState({
				alert: state => state.alert
			})
		},
		methods: {
			...mapActions({
				clearAlert: 'alert/clear'
			})
		},
		watch: {
			$route (to, from){
				// clear alert on location change
				this.clearAlert();
			}
		},
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
        background-color: #006633
    }
</style>
