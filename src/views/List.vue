<template>
    <div id="list">
        <font-awesome-icon icon="bars" class="hdr"></font-awesome-icon>
        <h1>List</h1>
        <detect-network v-on:detected-condition="detected">
            <div slot="online">
                <ul class="marker-list padding-0">
                    <li v-for="streetname in getDistinctStreetnames()" class="marker-item row">
                        <div class="marker-street col-10 padding-0" v-on:click.prevent="toggledropdown(streetname)">
                            {{ streetname }}
                            <font-awesome-icon icon="caret-down"></font-awesome-icon>
                        </div>
                        <div class="marker-favorite col-2 padding-0">
                            <a><font-awesome-icon icon="heart" class="marker-favorite__icon"></font-awesome-icon></a>
                        </div>
                        <transition name="slide">
                            <div v-if="(droppedDownStreet === streetname) && (showDropDown)" class="marker-housenumbers">
                                <a v-for="number in getDistinctHouseNumbersByStreetname(streetname)" v-bind:href="getNavUrl(streetname, number)" class="marker-housenumbers__nav">
                                    <div class="marker-street col-12 padding-0">
                                        {{ number }}
                                        <font-awesome-icon icon="location-arrow" class="marker-arrow"></font-awesome-icon>
                                    </div>
                                </a>
                            </div>
                        </transition>
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
				showDropDown: false,
                droppedDownStreet: ''
			}
		},
	    methods: {
		    ...mapActions('markers', {
			    getAllMarkers: 'getAll'
		    }),
		    detected(e) {
			    this.state = e;
		    },
            getDistinctStreetnames() {
	            return _.keys(_.countBy(this.markers.items, (data) => { return data.streetName; }));
            },
            getDistinctHouseNumbersByStreetname(streetname) {
		    	const numbers = _.filter(this.markers.items, {streetName: streetname});
	            return _.keys(_.countBy(numbers, (data) => { return data.houseNumber; }));
            },
            toggledropdown(streetname) {
	            this.droppedDownStreet = streetname;

	            if (this.droppedDownStreet === streetname) {
				    this.showDropDown = !this.showDropDown;
			    }
            },
            getNavUrl(street, number) {
		    	return 'https://www.google.com/maps?saddr=My+Location&daddr=' + street + '+' + number;
            }
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
    .slide-enter, .slide-leave-to{
        transform: scaleY(0);
    }

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
            transform-origin: top;
            transition: .4s ease-in-out;

            .marker-arrow {
                color: #006633;
            }
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

        &-housenumbers {
            transform-origin: top;
            transition: transform .4s ease-in-out;

            &__nav {
                color: inherit;
                text-decoration: none;
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