import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        menuOpen: false,
        projects: [
            {
                name: 'Ageas Portugal',
                path: 'ageas-portugal',
                description: '<a href="https://www.grupoageas.pt" target="_blank">www.grupoageas.pt</a> is the the institutional website for the Portuguese department of Ageas, a Belgian multinational insurance company.'
            },
            {
                name: 'Seguro Directo',
                path: 'seguro-directo',
                description: 'Seguro Directo description'
            },
            {
                name: 'Aguarela',
                path: 'aguarela',
                description: 'Aguarela description'
            },
            {
                name: 'Galp Corporate Event 2019',
                path: 'galp',
                description: 'Galp description'
            }
        ]
    },
    mutations: {
        toggleMenu(state, { event, isPageLoad = false }) {
            isPageLoad
                ? state.menuOpen = false
                : !event.target.closest('.menu__links') && (state.menuOpen = !state.menuOpen);

            const main = document.querySelector('main');
            state.menuOpen
                ? main.classList.add('blur')
                : main.classList.remove('blur');
        },

        addSlideAnimation(state, { event, action }) {

            if (window.innerWidth < 570) return;

            const getPosition = element => {
                let x = 0,
                    y = 0;

                while (element) {
                    x += element.offsetLeft + element.clientLeft;
                    y += element.offsetTop + element.clientTop;

                    element = element.offsetParent;
                }

                return {
                    x, y
                };
            }

            const getDirection = event => {
                const width = event.target.offsetWidth,
                    height = event.target.offsetHeight,
                    position = getPosition(event.target),
                    x = event.pageX - position.x - width / 2 * (width > height ? height / width : 1),
                    y = event.pageY - position.y - height / 2 * (height > width ? width / height : 1);
                let direction = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

                switch(direction) {
                    case 0:
                        direction = 'top'
                        break;
                    case 1:
                        direction = 'right'
                        break;
                    case 2:
                        direction = 'bottom'
                        break;
                    case 3:
                        direction = 'left'
                        break;
                    default:
                        direction = 'top'
                }

                return direction;
            }

            const target = event.currentTarget,
                direction = getDirection(event);


            target.className = '';
            target.classList.add(`slide-${action}-${direction}`);
        }
    },
    actions: {

    },
    getters: {

    }
});