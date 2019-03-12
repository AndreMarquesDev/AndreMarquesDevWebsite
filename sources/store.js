import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuOpen: false
    },
    mutations: {
        toggleMenu(state, isPageLoad = false) {
            isPageLoad
                ? state.menuOpen = false
                : state.menuOpen = !state.menuOpen;

            const body = document.querySelector('body');
            state.menuOpen
                ? body.classList.add('noScroll')
                : body.classList.remove('noScroll');
        }
    },
    actions: {

    },
    getters: {

    }
});