// Imports
import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';



// Buefy
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);



// Setup app
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
