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
                description: '<a href="https://www.grupoageas.pt" target="_blank" class="link">Ageas Portugal</a> is the institutional website for the Portuguese headquarters of <a href="https://www.ageas.com" target="_blank" class="link">Ageas</a>, a Belgian multinational insurance company, where it is also the largest one. It operates in 14 countries worldwide and is very relevant in Portugal, with their offer varying from life, house, health, car or even pet insurances.',
                myRole: 'My job at Ageas Portugal was',
                image: {
                    main: 'ageas-portugal',
                    detail1: 'ageas-portugal-detail-1',
                    detail2: 'ageas-portugal-detail-2'
                }
            },
            {
                name: 'Seguro Directo',
                path: 'seguro-directo',
                description: 'Seguro Directo description',
                myRole: 'My job at Seguro Directo was',
                image: {
                    main: 'seguro-directo',
                    detail1: 'seguro-directo-detail-1',
                    detail2: 'seguro-directo-detail-2'
                }
            },
            {
                name: 'Aguarela',
                path: 'aguarela',
                description: 'Aguarela description',
                myRole: 'My job at Aguarela was',
                image: {
                    main: 'aguarela',
                    detail1: 'aguarela-detail-1',
                    detail2: 'aguarela-detail-2'
                }
            },
            {
                name: 'Galp Corporate Event 2019',
                path: 'galp',
                description: 'Galp description',
                myRole: 'My job at Galp was',
                image: {
                    main: 'galp',
                    detail1: 'galp-detail-1',
                    detail2: 'galp-detail-2'
                }
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