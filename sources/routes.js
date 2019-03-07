import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home.vue'
import secondPage from './pages/secondPage.vue'

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
            path: '*',
            redirect: '/'
        }
    ]
})