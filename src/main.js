import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import Axios from 'axios';

import Buefy from 'buefy';
Vue.use(Buefy);

Vue.config.productionTip = false;

Axios.get('http://localhost:3000/api/user/form')
  .then(({ data }) => {
    console.log(data);
    new Vue({
    router,
    store: store(data),
    render: h => h(App)
  }).$mount('#app')});