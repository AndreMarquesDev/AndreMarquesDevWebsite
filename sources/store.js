import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuOpen: false
    },
    mutations: {
        toggleMenu(state, {event, isPageLoad = false}) {
            isPageLoad
                ? state.menuOpen = false
                : !event.target.closest('.menu__links') && (state.menuOpen = !state.menuOpen);

            const main = document.querySelector('main');
            state.menuOpen
                ? main.classList.add('blur')
                : main.classList.remove('blur');
        }
    },
    actions: {

    },
    getters: {

    }
});