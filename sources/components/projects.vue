<template>
    <section class="projects">
        <div class="wrapper">

            <animatedLetters text="<work/>"/>

            <ul>
                <li v-for="project in projectsArray" @mouseenter="addAnimation($event, 'in')" @mouseleave="addAnimation($event, 'out')">
                    <figure :text="project.name">
                        <img :src="require('../images/' + project.image + '.jpg')" alt="Project image">
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
                aguarela: {
                    name: 'Aguarela',
                    image: 'aguarela'
                },
                seguroDirecto: {
                    name: 'Seguro Directo',
                    image: 'seguro-directo'
                },
                ageasPortugal: {
                    name: 'Ageas Portugal',
                    image: 'ageas-portugal'
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

            target.className = '';
            target.classList.add(`slide-${state}-${direction}`);
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
        &.slide-in-top figure:before {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-top;
        }

        &.slide-in-right figure:before {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-right;
        }

        &.slide-in-bottom figure:before {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-bottom;
        }

        &.slide-in-left figure:before {
            transform: translate3d(0, 0, 0);
            animation-name: slide-in-left;
        }

        &.slide-out-top figure:before {
            transform: translate3d(0, 0, 0);
            animation-name: slide-out-top;
        }

        &.slide-out-right figure:before {
            transform: translate3d(0, 0, 0);
            animation-name: slide-out-right;
        }

        &.slide-out-bottom figure:before {
            transform: translate3d(0, 0, 0);
            animation-name: slide-out-bottom;
        }

        &.slide-out-left figure:before {
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
            @include fontXXL;
            text-align: center;
            background: $black;
            transform: translate3d(0, -100%, 0);
            animation: .3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            z-index: 1;
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

}

</style>