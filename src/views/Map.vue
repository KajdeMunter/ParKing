<template>
    <div>
        <h1>Map</h1>
        <detect-network v-on:detected-condition="detected">
            <div slot="online">
                <div class="OpenBoxMap__container">
                    <div id="OpenBoxMap"></div>
                </div>
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
	const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

	export default {
		name: "Map",
		computed: {
			...mapState({
				markers: state => state.markers.all
			}),
		},
		data() {
			return {
				state: null,
                mapMarkers: [],
			}
		},
        async mounted() {
	        await this.getAllMarkers();

	        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FqZGVtdW50ZXIiLCJhIjoiY2pwczJ1cHR6MDNoZzN4cDB5c2NiamxsNCJ9.AYNBqz5c_AtUNOJXkjA4cA';

	        const map = new mapboxgl.Map({
		        container: 'OpenBoxMap',
		        style: 'mapbox://styles/kajdemunter/cjps4pa7c2w362spgi3jpffyq',
		        center: [4.483979, 51.917333],
		        zoom: 12.0
	        });

            this.loadMapMarkers(map, this.markers);

	        setInterval(async function () {
		        await this.mapMarkers.forEach((marker => marker.remove()));
		        this.mapMarkers = [];

		        await this.getAllMarkers();
		        await this.loadMapMarkers(map, this.markers);
	        }.bind(this), 30000);

        },
		methods: {
			...mapActions('markers', {
				getAllMarkers: 'getAll'
			}),
            loadMapMarkers(map, markers) {
	            markers.items.forEach((marker) => {
		            // create a HTML element for each feature
		            let el = document.createElement('div');
		            let link = 'https://www.google.com/maps?saddr=My+Location&daddr=' + marker.latitude + ',' + marker.longitude;
		            let headerText = marker.available ? 'Parking spot available' : 'Parking spot occupied';
		            let html = '<div class="marker__popup">' +
			            '<h3 class="marker__popup__header">' + headerText + '</h3>' +
			            '<a class="marker__popup__link" href="' + link + '">Navigate to parking place</a>' +
			            '</div>';

		            el.className = marker.available ? 'marker marker--available' : 'marker marker--occupied';

		            const mapMarker = new mapboxgl.Marker(el)
			            .setLngLat([marker.longitude, marker.latitude])
			            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
				            .setHTML(html));

		            this.mapMarkers.push(mapMarker);

                    mapMarker.addTo(map);
	            });
            },
			detected(e) {
				this.state = e;
			},
		},
        components: {
			detectNetwork
        }
	}
</script>

<style lang="scss">
    .conn-err {
        color: red;
    }
    .OpenBoxMap__container {
        text-align: left;
    }

    #OpenBoxMap {
        position: absolute;
        top: 0;
        bottom: 50px;
        width: 100%;
    }

    .marker {
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;

        &--available {
            background-image: url('../assets/marker.png');
        }

        &--occupied {
            background-image: url('../assets/Avatar.png');
        }
        &__popup {
            color: black;

            &__header {

            }

            &__link {
                padding: 5px 10px;
                border-radius: 5px;
                background-color: deepskyblue;
                color: white;
            }
        }
    }
</style>