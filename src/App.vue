<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
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
		}
	};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
