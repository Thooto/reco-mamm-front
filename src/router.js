import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import Home from '@/components/home/View.vue';
import Admin from '@/components/admin/View.vue';
import Survey from '@/components/survey/View.vue';
import About from '@/components/about/View.vue';
import Login from '@/components/login/View.vue';
import Results from '@/components/results/View.vue';

import General from '@/components/results/General.vue';
import Trends from '@/components/results/Trends.vue';
import Download from '@/components/results/Download.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/connexion', name: 'login', component: Login },
        {
            path: '/admin',
            component: Admin,
            name: 'admin'
            // beforeEnter(to, from, next) {
            //     if (store.state.logged) return next();
            //     next('/');
            // }
        },
        { path: '/parcours', name: 'survey', component: Survey },
        { path: '/a-propos', name: 'about', component: About },
        {
            path: '/resultats', component: Results, children: [
                { path: '', name: 'results', component: General },
                { path: 'tendances', name: 'trends', component: Trends },
                { path: 'telecharger', name: 'download', component: Download }
            ]
        },
        { path: '*', redirect: '/' }
    ]
});
