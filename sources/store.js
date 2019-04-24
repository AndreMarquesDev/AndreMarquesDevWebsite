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
                year: ' - 2019',
                description: `<a href="https://www.grupoageas.pt" target="_blank" rel="noreferrer" aria-label="Ageas Portugal Website" class="alternativeLink">Ageas Portugal</a> is the institutional website for the Portuguese headquarters of <a href="https://www.ageas.com" target="_blank" rel="noreferrer" aria-label="Ageas website" class="alternativeLink">Ageas</a>, a Belgian multinational insurance company, where it's also the largest one. It operates in 14 countries worldwide and is very relevant in Portugal, with their offer varying from life, house, health, car or even pet insurances.`,
                myRole: `<span>I was full-time at this project from the beginning until its conclusion, which means I was the one making most of the Frontend technical decisions and was in constant communication with Backend, UX and UI, as well as with the client itself. The team consisted on one person per area (Frontend, Backend, UX, UI and Project Management) for most of the time but, when needed, more people would be added to the project, which means I also had to work with another Frontend developer for some time.</span> <span>I'm very happy with the final result since it was a quick and 'clean' project, meaning it came out a pretty nice and solid content-driven website, developed in a short span of time.</span> <span>We used SASS for the styling, mostly vanilla JavaScript (with just some bits of jQuery) and Gulp for the Frontend files compilation. Internet Explorer 10 and 11 had to be supported, as well as every other major browser.</span>`,
                lighthouseText: `Since I only had control over the frontend, I was a bit limited on the possible improvements. I can't control the images sizes (which usually takes a huge toll in performance) or any of the backend behavior. The best I could do was write efficient JavaScript and CSS, write semantic HTML with no unnecessary tags and not use JavaScript plugins that weren't needed.`,
                lighthouseResults: {
                    'Performance': 95,
                    'Accessibility': 65,
                    'Best Practices': 75,
                    'SEO': 100,
                },
                image: {
                    main: 'ageas-portugal',
                    detail1: 'ageas-portugal-detail-1',
                    detail2: 'ageas-portugal-detail-2'
                },
                credits: [
                    'Frontend - André Marques, Pedro Duarte & Ricardo Melo',
                    'Backend - Nuno Dias, Tiago Pombo, Hugo Baeta & Nuno Inácio',
                    'UI - João Conceição, Rafaela Lucas & Renato Miguel',
                    'UX - Rafaela Mogas & Susana Vilaça',
                    'Project Management - Catarina Carrola & Marta Santos'
                ]
            },
            {
                name: 'Seguro Directo',
                path: 'seguro-directo',
                year: ' - 2018',
                description: `<a href="https://www.segurodirecto.pt/" target="_blank" rel="noreferrer" aria-label="Seguro Directo Website" class="alternativeLink">Seguro Directo</a> is a Portuguese automobile insurance company member of the <a href="https://www.grupoageas.pt/marcas-do-grupo/seguro-directo" target="_blank" rel="noreferrer" aria-label="Seguro Directo page in Ageas Portugal website" class="alternativeLink">Ageas Group</a> and was established in 1996. This project's goal was to replace their (really) aged website, improving not only the visual aspect but also the insurance simulation experience.`,
                myRole: 'My role at Seguro Directo was',
                lighthouseText: `Since I only had control over the frontend, I was a bit limited on the possible improvements. I can't control the images sizes (which usually takes a huge toll in performance) or any of the backend behavior. The best I could do was write efficient JavaScript and CSS, write semantic HTML with no unnecessary tags and not use JavaScript plugins that weren't needed.`,
                lighthouseResults: {
                    'Performance': 35,
                    'Accessibility': 60,
                    'Best Practices': 75,
                    'SEO': 100,
                },
                image: {
                    main: 'seguro-directo',
                    detail1: 'seguro-directo-detail-1',
                    detail2: 'seguro-directo-detail-2'
                },
                credits: [
                    'Frontend - André Marques, Paulo Garcia, Pedro Duarte, Ricardo Melo & Jorge Chagas',
                    'Backend - Seguro Directo',
                    'UI - Edmundo Ramos & Renato Miguel',
                    'UX - Rita Pereira & Susana Vilaça',
                    'Project Management - Fábio Farinha & Marta Santos'
                ]
            },
            {
                name: 'Aguarela',
                path: 'aguarela',
                year: ' - 2019',
                description: 'Aguarela description',
                myRole: 'My role at Aguarela was',
                lighthouseText: `Since I only had control over the frontend, I was a bit limited on the possible improvements. I can't control the images sizes (which usually takes a huge toll in performance) or any of the backend behavior. The best I could do was write efficient JavaScript and CSS, write semantic HTML with no unnecessary tags and not use JavaScript plugins that weren't needed.`,
                lighthouseResults: {
                    'Performance': 100,
                    'Accessibility': 85,
                    'Best Practices': 95,
                    'SEO': 100,
                },
                image: {
                    main: 'aguarela',
                    detail1: 'aguarela-detail-1',
                    detail2: 'aguarela-detail-2'
                },
                credits: [
                    'Frontend - André Marques',
                    'UI - Catarina Santiago (Aguarela)',
                ]
            },
            {
                name: 'Galp Corporate Event 2019',
                path: 'galp',
                year: ' - 2019',
                description: 'Galp description',
                myRole: 'My role at Galp was',
                image: {
                    main: 'galp',
                    detail1: 'galp-detail-1',
                    detail2: 'galp-detail-2'
                },
                credits: [
                    'Frontend - ',
                    'Backend - ',
                    'UI - ',
                    'UX - ',
                    'Project Management - '
                ]
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