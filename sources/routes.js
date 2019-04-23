import Vue from 'vue'
import router from 'vue-router'
import home from './pages/home.vue'
import contact from './pages/contact.vue'
import work from './pages/work.vue'
import projectPage from './pages/projectPage.vue'
import about from './pages/about.vue'

Vue.use(router);

const routes = new router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                title: '<home/> - André Marques Dev Website'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact,
            meta: {
                title: '<contact/> - André Marques Dev Website'
            }
        },
        {
            path: '/work',
            name: 'work',
            component: work,
            meta: {
                title: '<work/> - André Marques Dev Website'
            }
        },
        {
            path: '/work/:project',
            name: 'projectPage',
            component: projectPage,
            meta: {
                title: ' - André Marques Dev Website'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            meta: {
                title: '<about/> - André Marques Dev Website'
            }
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
});

// Set document title
// for '/work/:project' check 'projectDetail.vue' because its dynamic
routes.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'André Marques Dev Website';
    next();
});

export default routes;