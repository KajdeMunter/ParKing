<template>
    <div>
        <h1>Map</h1>
        <div class="OpenBoxMap__container">
            <div id="OpenBoxMap"></div>
        </div>
    </div>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
	const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

	export default {
		name: "Map",
		computed: {
			...mapState({
				markers: state => state.markers.all
			})
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

            this.markers.items.forEach(function(marker) {
		        // create a HTML element for each feature
		        let el = document.createElement('div');
	            let link = 'https://www.google.com/maps?saddr=My+Location&daddr=' + marker.latitude + ',' + marker.longitude;
	            let headerText = marker.available ? 'Parking spot available' : 'Parking spot occupied';
                let html = '<div class="marker__popup">' +
                                '<h3 class="marker__popup__header">' + headerText + '</h3>' +
                                '<a class="marker__popup__link" href="' + link + '">Navigate to parking place</a>' +
                            '</div>';

		        el.className = marker.available ? 'marker marker--available' : 'marker marker--occupied';
		        new mapboxgl.Marker(el)
			        .setLngLat([marker.longitude, marker.latitude])
			        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                    .setHTML(html))
                    .addTo(map);
	        });

        },
		methods: {
			...mapActions('markers', {
				getAllMarkers: 'getAll'
			})
		}
	}
</script>

<style lang="scss">
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