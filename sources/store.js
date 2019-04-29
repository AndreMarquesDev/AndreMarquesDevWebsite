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
                year: 2019,
                description: `<a href="https://www.grupoageas.pt" target="_blank" rel="noreferrer" aria-label="Ageas Portugal Website" class="alternativeLink">Ageas Portugal</a> is the institutional website for the Portuguese headquarters of <a href="https://www.ageas.com" target="_blank" rel="noreferrer" aria-label="Ageas website" class="alternativeLink">Ageas</a>, a Belgian multinational insurance company, where it's also the largest one. It operates in 14 countries worldwide and is very relevant in Portugal, with their offer varying from life, house, health, car or even pet insurances.`,
                myRole: `<span>I was full-time at this project from the beginning until its conclusion, which means I was the one making most of the Frontend technical decisions and was in constant communication with Backend, UX and UI, as well as with the client itself. The team consisted of one person per area (Frontend, Backend, UX, UI and Project Management) for most of the time but, when needed, more people would be added to the project, which means I also had to work with another Frontend developer for some time.</span> <span>I'm very happy with the final result since it was a quick and 'clean' project, meaning it came out a pretty nice and solid content-driven website, developed in a short span of time.</span> <span>We used SASS for the styling, mostly vanilla JavaScript (with just some bits of jQuery) and Gulp for the Frontend files compilation. Internet Explorer 10 and 11 had to be supported, as well as every other major browser.</span>`,
                lighthouseText: `Since I only had control over the frontend, I was a bit limited on the possible improvements. I can't control the images sizes (which usually takes a huge toll in performance) or any of the backend behavior. The best I could do was write efficient JavaScript and CSS, write semantic HTML with no unnecessary tags and not use JavaScript plugins that weren't needed.`,
                lighthouseResults: {
                    'Performance': 95,
                    'Accessibility': 65,
                    'Best Practices': 75,
                    'SEO': 100,
                },
                image: {
                    thumbnail: 'ageas-portugal-thumbnail',
                    detailMain: 'ageas-portugal-detail-main',
                    detailResponsive: 'ageas-portugal-detail-responsive',
                    slider: [
                        'ageas-portugal-detail-slider-1',
                        'ageas-portugal-detail-slider-2',
                        'ageas-portugal-detail-slider-3',
                        'ageas-portugal-detail-slider-4',
                        'ageas-portugal-detail-slider-5',
                        'ageas-portugal-detail-slider-6',
                        'ageas-portugal-detail-slider-7',
                        'ageas-portugal-detail-slider-8',
                        'ageas-portugal-detail-slider-9',
                        'ageas-portugal-detail-slider-10',
                        'ageas-portugal-detail-slider-11',
                        'ageas-portugal-detail-slider-12',
                        'ageas-portugal-detail-slider-13',
                        'ageas-portugal-detail-slider-14',
                        'ageas-portugal-detail-slider-15',
                        'ageas-portugal-detail-slider-16',
                        'ageas-portugal-detail-slider-17'
                    ]
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
                year: 2018,
                description: `<a href="https://www.segurodirecto.pt/" target="_blank" rel="noreferrer" aria-label="Seguro Directo Website" class="alternativeLink">Seguro Directo</a> is a Portuguese automobile insurance company member of the <a href="https://www.grupoageas.pt/marcas-do-grupo/seguro-directo" target="_blank" rel="noreferrer" aria-label="Seguro Directo page in Ageas Portugal website" class="alternativeLink">Ageas Group</a> and was established in 1996. This project's goal was to replace their (really) aged website, improving not only the visual aspect but also the insurance simulation experience.`,
                myRole: `<span>This was my first big project and one that I worked on from its beginning to its conclusion. I was not the main Frontend developer but that didn't stop me from giving my inputs and approaching each challenge in my own way.</span><span>This project had a different workflow when compared to our usual one at <a href="https://www.fullsix.pt" target="_blank" rel="noreferrer" aria-label="Fullsix website" class="alternativeLink">Fullsix</a> though since the backend was the clients' responsibility. Furthermore, the client requested me and another Frontend developer to move to their office until the project finished, which resulted in daily communication with them, not only in UI feedbacks but also in backend integration.</span><span>I'm happy with the result since it was, as I said above, my first big project and therefore a huge learning experience. There were ups and downs through it and it was not easy having to rellocate to the clients' headquarters but I am proud of what the website turned out to be, especially with its complex simulation flow.</span><span>Regarding the code, it was mostly written in jQuery with a few plugins like slick.js, selectize.js, bodymovin.js and a few others. We used Sass for the styling and pure HTML for the content, getting our code compiled by Gulp. Internet Explorer 10 and 11 had to be supported, as well as every other major browser.</span>`,
                lighthouseText: `Since I only had control over the frontend, I was a bit limited on the possible improvements. I can't control the images sizes (which usually takes a huge toll in performance and is the case here) or any of the backend behavior. The best I could do was write efficient JavaScript and CSS, write semantic HTML with no unnecessary tags and not use JavaScript plugins that weren't needed.`,
                lighthouseResults: {
                    'Performance': 35,
                    'Accessibility': 60,
                    'Best Practices': 75,
                    'SEO': 100,
                },
                image: {
                    thumbnail: 'seguro-directo-thumbnail',
                    detailMain: 'seguro-directo-detail-main',
                    detailResponsive: 'seguro-directo-detail-responsive',
                    slider: [
                        'seguro-directo-detail-slider-1',
                        'seguro-directo-detail-slider-2',
                        'seguro-directo-detail-slider-3',
                        'seguro-directo-detail-slider-4',
                        'seguro-directo-detail-slider-5',
                        'seguro-directo-detail-slider-6',
                        'seguro-directo-detail-slider-7',
                        'seguro-directo-detail-slider-8',
                        'seguro-directo-detail-slider-9',
                        'seguro-directo-detail-slider-10'
                    ]
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
                year: 2019,
                description: `<a href="https://www.aguarelaproject.com" target="_blank" rel="noreferrer" aria-label="Aguarela Website" class="alternativeLink">Aguarela</a> is the website for <a href="https://www.instagram.com/aguarela.project" target="_blank" rel="noreferrer" aria-label="Aguarela Instagram" class="alternativeLink">Aguarela Project</a>`,
                myRole: `<span>I was responsible for the whole development and implementation of the website except for the UI design. Other than that, I developed the code, optimized images, acquired the domain and took care of the website hosting.</span><span>Even though it was a simple static website, this allowed me to have a broader view of the whole process of building a website and putting it online. Furthermore, I was all by myself while doing it and therefore I can consider it as my first freelance job.</span><span>Since I was aiming for the cleanest and most efficient code possible, I used plain vanilla JavaScript with no plugins or frameworks whatsoever. This means that all the neat features were handmade by me and you can see some of the examples on my <a href="https://codepen.io/AndreMarquesDev" target="_blank" rel="noreferrer" aria-label="André Marques CodePen" class="alternativeLink">CodePen</a> page.</span><span>I used SASS for the styling and Gulp as the automated compiler.</span>`,
                lighthouseText: `Since this is a static website that didn't rely on backend, I had total control over its content. This includes the biggest performance throttler: images. In this website, all of them are optimized and that makes a huge difference, contributing heavily to the 100% score. Apart from that, I was very strict with the quality of my code and that reflects on the high scores on the other departments.`,
                lighthouseResults: {
                    'Performance': 100,
                    'Accessibility': 85,
                    'Best Practices': 95,
                    'SEO': 100,
                },
                image: {
                    thumbnail: 'aguarela-thumbnail',
                    detailMain: 'aguarela-detail-main',
                    detailResponsive: 'aguarela-detail-responsive',
                    slider: [
                        'aguarela-detail-slider-1',
                        'aguarela-detail-slider-2',
                        'aguarela-detail-slider-3',
                        'aguarela-detail-slider-4'
                    ]
                },
                credits: [
                    'Frontend - André Marques',
                    'UI - Catarina Santiago (Aguarela)',
                ]
            },
            {
                name: 'Galp Corporate Event',
                path: 'galp',
                year: 2019,
                description: `<a href="https://www.galp.com/corp/en" target="_blank" rel="noreferrer" aria-label="Galp website" class="alternativeLink">Galp</a> is a portuguese company of oil and gas exploration founded in 1999 and one of the most relevant in Portugal's petroleum industry. <a href="https://www.energiser.pt/en/galp-world/2019-01-15-The-Galp-energisers-Summit-has-just-started" target="_blank" rel="noreferrer" aria-label="Galp website article about the event" class="alternativeLink">Galp Energisers Summit</a> was a corporate event that took place at the beginning of 2019, gathering 36 speakers and more than 1000 people in Lisbon. The goal with this project was to create an interactive app which would be used at the event to check the schedule, the event's layout and create more engagement around it. It was developed using <a href="https://developers.google.com/web/progressive-web-apps" target="_blank" rel="noreferrer" aria-label="Progressive Web Apps by Google" class="alternativeLink">Progressive Web App</a> technology instead of a <a href="https://medium.com/inside-smartapps/native-application-vs-progressive-web-app-which-one-should-you-choose-5eeaaf6ee92d" target="_blank" rel="noreferrer" aria-label="PWA vs native app comparison" class="alternativeLink">native app</a>.`,
                myRole: 'My role at Galp was',
                image: {
                    thumbnail: 'galp-thumbnail',
                    detailMain: 'galp-detail-main',
                    detailResponsive: 'galp-detail-responsive'
                },
                credits: [
                    'Frontend - André Dargains, Ricardo Melo & André Marques',
                    'Backend - Francisco Pinto Coelho & Alexandre Salsinha',
                    'UI - Diana Gonçalves & Ana Saúde',
                    'Project Management - Joana André & Gonçalo Caldas'
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