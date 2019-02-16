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
    store.dispatch('populateForm', data);

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  });