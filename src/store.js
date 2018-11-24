// Imports
import Vue from 'vue';
import Vuex from 'vuex';



// Setup store
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        url: 'http://localhost:3000',
        logged: false
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
