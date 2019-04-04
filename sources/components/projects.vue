<template>
    <section class="projects">
        <div class="wrapper">

            <animatedLetters text="<work/>"/>

            <ul>
                <li v-for="project in projectsArray" :project="project.name" @mouseenter="addAnimation($event, 'in')" @mouseleave="addAnimation($event, 'out')">
                    <figure>
                        <img :src="require('../images/' + project.image + '.webp')" alt="Project image">
                        <span :projectName="project.name"></span>
                    </figure>
                </li>
            </ul>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'projects',
    components: {
        animatedLetters
    },
    data() {
        return {
            projectsArray: {
                ageasPortugal: {
                    name: 'Ageas Portugal',
                    image: 'ageas-portugal'
                },
                seguroDirecto: {
                    name: 'Seguro Directo',
                    image: 'seguro-directo'
                },
                aguarela: {
                    name: 'Aguarela Project',
                    image: 'aguarela'
                },
                galp: {
                    name: 'Galp Corporate Event 2019',
                    image: 'galp'
                }
            }
        }
    },
    mounted() {
        const projects = this.$el.querySelectorAll('li');

        this.makeItemsSquare(projects);
        window.addEventListener('resize', () => this.makeItemsSquare(projects));


        if (window.innerWidth < 570) this.mobileAnimationBehavior();
    },
    methods: {
        makeItemsSquare(elements) {
            elements.forEach(element => element.style.height = element.offsetWidth + 'px');
        },
        getPosition(element) {
            let x = 0,
                y = 0;

            while (element) {
                x += element.offsetLeft + element.clientLeft;
                y += element.offsetTop + element.clientTop;

                element = element.offsetParent;
            }

            return {
                x,
                y
            };
        },
        getDirection(event) {
            const width = event.target.offsetWidth,
                height = event.target.offsetHeight,
                position = this.getPosition(event.target),
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
        },
        addAnimation(event, state) {
            const target = event.currentTarget,
                direction = this.getDirection(event, target);

            if (window.innerWidth < 570) return;

            target.className = '';
            target.classList.add(`slide-${state}-${direction}`);
        },
        mobileAnimationBehavior() {
            const projectsElements = this.$el.querySelectorAll('li');
            let previousY = 0;

            const projectObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {

                        // window.pageYOffset was reporting wrong values so this setTimeout was needed
                        // to actually report the offsetY of the current element being evaluated
                        setTimeout(() => {
                            const project = entry.target;

                            // Scroll down
                            if (previousY <= window.pageYOffset) {
                                project.className = 'slide-in-top';

                                projectsElements.forEach(element => {
                                    project.getAttribute('project') !== element.getAttribute('project') &&
                                        element.matches('.slide-in-top, .slide-in-bottom') &&
                                            (element.className = 'slide-out-bottom');
                                });

                            // Scroll up
                            } else {
                                project.className = 'slide-in-bottom';

                                projectsElements.forEach(element => {
                                    project.getAttribute('project') !== element.getAttribute('project') &&
                                        element.matches('.slide-in-top, .slide-in-bottom') &&
                                            (element.className = 'slide-out-top');
                                });
                            }

                            previousY = window.pageYOffset;

                        }, 100);
                    }
                });
            }, {
                threshold: 1.0
            });

            projectsElements.forEach(project => projectObserver.observe(project));
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.projects {
    width: 100%;
    display: flex;
    position: relative;
    padding: calc(#{$navHeight + 40}) 0 calc(#{$footerHeight + 40});

    .animatedLetters {
        @include fontXXL;
        font-weight: $fontBold;
        text-align: left;
        margin-bottom: 40px;
    }

    ul {
        width: 100%;
        display: grid;
        grid-template: auto / repeat(2, minmax(200px, 500px));
        grid-gap: 100px 3%;
        justify-content: space-around;
    }

    li {
        &.slide-in-top span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-top;
        }

        &.slide-in-right span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-right;
        }

        &.slide-in-bottom span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-bottom;
        }

        &.slide-in-left span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-left;
        }

        &.slide-out-top span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-out-top;
        }

        &.slide-out-right span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-out-right;
        }

        &.slide-out-bottom span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-out-bottom;
        }

        &.slide-out-left span {
            transform: translate3d(0, 0, 0);
            animation-name: slide-out-left;
        }
    }

    figure {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        &:before {
            content: attr(text);
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: $black;
            opacity: .15;
            @include transition (opacity, .4s); // should be equal or higher than the direction aware animation (on <span>)
            z-index: 1;
        }

        &:hover:before {
            opacity: .5;
        }

        span {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            @include fontGiant ($black);
            font-weight: $fontBold;
            letter-spacing: 6.5px; // So that 'Corporate' fits
            text-align: center;
            background: $white;
            mix-blend-mode: color-dodge;
            transform: translate3d(0, -100%, 0);
            animation: .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            z-index: 1;

            &:before {
                content: attr(projectName);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-transform: uppercase;
            }

        }

        img {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
        }

    }

    @include phablet {
        figure span {
            @include fontXXL ($black);
        }
    }

    @include mq (0, 569px) {
        padding: calc(#{$navHeight + 20}) 0 calc(#{$footerHeight + 20});

        ul {
            grid-template-columns: 1fr;
            grid-gap: 50px;
        }

        li.slide-in-top figure:before, li.slide-in-bottom figure:before {
            opacity: .5;
        }

        figure {

            &:hover:before {
                opacity: .15;
            }

            span {
                font-size: $fontGiantMobile;
                line-height: 40px;
                letter-spacing: 5px;
            }

        }
    }

}

</style>