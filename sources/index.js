'serviceWorker' in navigator && window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'));

import './index.html';
import './styles/main.scss';

// IE specific message
if (window.navigator.userAgent.indexOf('MSIE ') > 0 || window.navigator.userAgent.indexOf('Trident/') > 0) {
    // IE 10 or older || IE 11 //
    var ieMessage = document.createElement('h1');
    ieMessage.innerHTML = `This website is not supported by Internet Explorer and you shouldn't be using it as a browser since it makes you vulnerable to malicious attacks. <a href="https://www.engadget.com/2016/01/12/microsoft-support-old-internet-explorer/" target="_blank">Even Microsoft stopped supporting it years ago and recommends you make the switch</a>. Please use any other free browser like Chrome, Firefox, etc.`;
    document.querySelector('body').insertAdjacentElement('afterbegin', ieMessage);
}

import Vue from 'vue'
import app from './app.vue'
import routes from './routes.js'
import store from './store.js'
import './fontAwesome.config'

Vue.config.productionTip = false;

new Vue({
    router: routes,
    store: store,
    render: createElement => createElement(app)
}).$mount('#root');

console.log('%c| 🔧 Developed by André Marques ✏️ Designed by Aguarela Digital |', 'background: #000; color: #fff;');
console.log('%c| 💻 Powered by Vue.js 💻 |', 'background: #000; color: #fff;');
console.log('%c| https://github.com/AndreMarquesDev |', 'background: #000; color: #fff;');
console.log('%c| https://codepen.io/AndreMarquesDev |', 'background: #000; color: #fff;');