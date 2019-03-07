require('offline-plugin/runtime').install();

import './index.html';
import './styles/main.scss';

import Vue from 'vue'
import app from './app.vue'
import routes from './routes.js'
import store from './store.js'

Vue.config.productionTip = false

new Vue({
    router: routes,
    store: store,
    render: createElement => createElement(app)
}).$mount('#root');