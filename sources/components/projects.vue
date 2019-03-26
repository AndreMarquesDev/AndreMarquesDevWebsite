<template>
    <section class="projects">
        <div class="wrapper">

            <animatedLetters text="<work/>"/>

            <ul>
                <li v-for="project in projectsArray">
                    {{ project.name }}
                    <figure>
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
                    image: 'images/aguarela.jpg'
                },
                seguroDirecto: {
                    name: 'Seguro Directo',
                    image: 'images/seguro-directo.jpg'
                },
                ageasPortugal: {
                    name: 'Ageas Portugal',
                    image: 'images/ageas-portugal.jpg'
                },
                galp: {
                    name: 'Galp Corporate Event 2019',
                    image: 'images/galp.jpg'
                }
            }
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.projects {
    width: 100%;
    height: 1500px;
    display: flex;
    position: relative;
    padding-top: $navHeight;

    .animatedLetters {
        text-align: left;
    }

    ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    li {
        color: $white;
    }

    figure {
        width: 100%;
        height: 300px;
        overflow: hidden;

        img {
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

    }

}

</style>