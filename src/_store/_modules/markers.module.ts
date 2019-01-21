import Vue from 'vue';
import Vuex from 'vuex';
import { markerService } from '../../_services/marker.service';

Vue.use(Vuex);

export const markers = {
    namespaced: true,
    state: {
        all: {} as any
    },
    mutations: {
        getAllRequest(state) {
            state.all = { loading: true };
        },
        getAllSuccess(state, markers) {
            state.all = { items: markers };
        },
        getAllFailure(state, error) {
            state.all = { error };
        }
    },
    actions: {
        async getAll({ commit }) {
            commit('getAllRequest');
            await markerService.getAll()
                .then(
                    (markers) => commit('getAllSuccess', markers),
                    (error) => commit('getAllFailure', error)
                );
        },
    },
};
