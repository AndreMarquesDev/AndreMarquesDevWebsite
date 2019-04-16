import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/home.vue'
import contact from './pages/contact.vue'
import work from './pages/work.vue'
import projectPage from './pages/projectPage.vue'
import about from './pages/about.vue'

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
            path: '/contact',
            name: 'contact',
            component: contact
        },
        {
            path: '/work',
            name: 'work',
            component: work
        },
        {
            path: '/work/:project',
            name: 'projectPage',
            component: projectPage
        },
        {
            path: '/about',
            name: 'about',
            component: about
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