import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import List from '@/views/List.vue';
import Vuex from 'vuex';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faMapMarkerAlt, faCog, faBars, faHeart, faEnvelope, faKey, faCaretDown, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faCoffee, faMapMarkerAlt, faCog, faBars, faHeart, faEnvelope, faKey, faCaretDown, faLocationArrow);

const store = new Vuex.Store({
    modules: {
        markers: {
            namespaced: true,
            state: {
                all: {} as any
            },
            actions: {
                getAll() {
                    return JSON.parse('[{' +
                    '"id":"047f869b-d6ea-4a92-84d0-a8cf100f9972",' +
                    '"available":true,' +
                    '"latitude":51.91716,' +
                    '"longitude":4.484132,' +
                    '"streetName":"Wijnhaven",' +
                    '"houseNumber":"107"' +
                    '}]')
                }
            },
        },
    },
});

describe('List', () => {
    // Inspect the raw component options
    const list = shallowMount(List, {
        localVue,
        store
    });

    it('Gives error on no connection', () => {
        expect(list.text()).to.contain('Please connect to a network connection to use ParKing');
    })
});