<template>
    <div id="list">
        <font-awesome-icon icon="bars" class="hdr"></font-awesome-icon>
        <h1>List</h1>
        <detect-network v-on:detected-condition="detected">
            <div slot="online">
                <ul class="marker-list padding-0">
                    <li v-for="marker in markers.items" class="marker-item row">
                        <div class="marker-street col-10 padding-0">{{ marker.id }}</div>
                        <div class="marker-favorite col-2 padding-0">
                            <a><font-awesome-icon icon="heart" class="marker-favorite__icon"></font-awesome-icon></a>
                        </div>
                    </li>
                </ul>
            </div>
            <div slot="offline">
                <h3 class="conn-err">Please connect to a network connection to use ParKing.</h3>
            </div>
        </detect-network>
    </div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	import detectNetwork from 'v-offline';

	export default {
        name: "List",
	    computed: {
		    ...mapState({
			    markers: state => state.markers.all
		    }),
	    },
		data() {
			return {
				state: null,
			}
		},
	    methods: {
		    ...mapActions('markers', {
			    getAllMarkers: 'getAll'
		    }),
		    detected(e) {
			    this.state = e;
		    },
	    },
	    async mounted() {
		    await this.getAllMarkers();
	    },
        components: {
        	detectNetwork,
        }
    }
</script>

<style scoped lang="scss">
    .padding-0 {
        padding: 0;
    }

    .marker {
        &-list {
            text-align: left;
            list-style-type: none;
            color: #999999;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
        }

        &-item {
            padding: 5px 0 5px 5px;
            margin: 0;
            border-bottom: #006633 1px;
            border-bottom-style: solid;
            font-size: 1em;
            background-color: #ffffff;
        }

        &-street {
            line-height: 33px;
        }

        &-favorite {
            margin-bottom: auto;
            margin-top: auto;
            text-align: center;

            &__icon {
                color: #7e838c;
                font-size: 1em;
            }

            a {
                color: #7e838c;
                font-size: 1.5em;
            }
        }

    }

    h1 {
        color: #ffffff;
        display: inline;
        position: relative;
    }

    .hdr {
        color: #ffffff;
        font-size: 2em;
        position: relative;
        right: 20px;
    }
</style>