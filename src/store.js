import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default (form) => new Vuex.Store({
    state: {
        url: 'http://localhost:3000/api',
        logged: false,
        form
    },
    mutations: {
        login(state) {
            state.logged = true;
        },
        logout(state) {
            state.logged = false;
        }
    }
});