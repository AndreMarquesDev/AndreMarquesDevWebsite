<template>
    <section class="projects">
        <div class="wrapper">

            <animatedLetters text="<work/>"/>

            <ul>
                <li v-for="project in projectsArray" @mouseenter="addClass($event, 'in')" @mouseleave="addClass($event, 'out')">
                    <!-- {{ project.name }} -->
                    <figure :text="project.name">
                        <img :src="project.image" alt="Project image">
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
                    image: '../images/aguarela.jpg'
                },
                seguroDirecto: {
                    name: 'Seguro Directo',
                    image: '../images/seguro-directo.jpg'
                },
                ageasPortugal: {
                    name: 'Ageas Portugal',
                    image: '../images/ageas-portugal.jpg'
                },
                galp: {
                    name: 'Galp Corporate Event 2019',
                    image: '../images/galp.jpg'
                }
            }
        }
    },
    mounted() {
        const projectsList = this.$el.querySelectorAll('li');

        this.makeItemsSquare(projectsList);
        window.addEventListener('resize', () => this.makeItemsSquare(projectsList));
    },
    methods: {
        makeItemsSquare(elements) {
            elements.forEach(element => element.style.height = element.offsetWidth + 'px');
        },
        getPosition(el) {
            var xPos = 0;
            var yPos = 0;

            while (el) {
                xPos += el.offsetLeft + el.clientLeft;
                yPos += el.offsetTop + el.clientTop;

                el = el.offsetParent;
            }
            return {
                x: xPos,
                y: yPos
            };
        },
        getDirection(e) {
            // Width and height of current item
            var w = event.target.offsetWidth;
            var h = event.target.offsetHeight;
            var position = this.getPosition(event.target);

            // Calculate the x/y value of the pointer entering/exiting, relative to the center of the item.
            var x = e.pageX - position.x - w / 2 * (w > h ? h / w : 1);
            var y = e.pageY - position.y - h / 2 * (h > w ? w / h : 1);

            // Calculate the angle the pointer entered/exited and convert to clockwise format (top/right/bottom/left = 0/1/2/3).  See https://stackoverflow.com/a/3647634 for a full explanation.
            var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

            switch(d) {
                case 0:
                    d = 'top'
                    break;
                case 1:
                    d = 'right'
                    break;
                case 2:
                    d = 'bottom'
                    break;
                case 3:
                    d = 'left'
                    break;
                default:
                    d = 'top'
            }

            console.log(d);

            return d;
        },
        addClass(e, state) {
            var currentItem = e.currentTarget;
            var direction = this.getDirection(e, currentItem);

            // Remove current animation classes and add new ones e.g. swap --in for --out.
            var currentCssClasses = currentItem.className.split(' ');
            var filteredCssClasses = currentCssClasses.filter(function (cssClass) {
                return !cssClass.startsWith(animationName);
            }).join(' ');
            currentItem.className = filteredCssClasses;
            currentItem.classList.add(animationName + '--' + state + '-' + direction);
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
    padding: calc(#{$navHeight + 40}) 0;

    .animatedLetters {
        @include fontXXL;
        text-align: left;
        margin-bottom: 40px;
    }

    ul {
        width: 100%;
        display: grid;
        grid-template: 300px / repeat(auto-fit,minmax(200px,1fr));
        grid-column-gap: 4%;
        overflow: hidden;
    }

    li {
        color: $white;

        &:hover figure:before {
            opacity: .2;
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
            color: $white;
            background: $black;
            opacity: 0;
            z-index: 1;
        }

        img {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

    }

}

</style>