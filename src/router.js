import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import Home from '@/components/home/View.vue';
import Admin from '@/components/admin/View.vue';
import Survey from '@/components/survey/View.vue';
import About from '@/components/about/View.vue';
import Login from '@/components/login/View.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/connexion', name: 'login', component: Login },
        {
            path: '/admin', name: 'admin',
            component: Admin,
            beforeEnter(to, from, next) {
                if (store.state.logged) return next();
                return next('/');
            }
        },
        { path: '/parcours', name: 'survey', component: Survey },
        { path: '/a-propos', name: 'about', component: About },
        { path: '*', redirect: '/' }
    ]
});
