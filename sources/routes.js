import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home.vue'
import secondPage from './pages/secondPage.vue'
import work from './pages/work.vue'

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/secondPage',
            name: 'secondPage',
            component: secondPage
        },
        {
            path: '/work',
            name: 'work',
            component: work
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return setTimeout(() => window.scrollTo({ top: savedPosition, behavior: 'smooth' }), 1000);
        else return setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 1000);
    }
})