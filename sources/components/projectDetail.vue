<template>
    <section class="projectDetail mainSection">
        <div class="wrapper">

            <animatedLetters :text="this.project.name"/>

            <figure>
                <picture>
                    <source :srcset="require('../images/' + this.project.path + '.webp')" type="image/webp">
                    <source :srcset="require('../images/' + this.project.path + '.jpg')" type="image/jpeg">
                    <img :src="require('../images/' + this.project.path + '.jpg')" :alt="this.project.name">
                </picture>
            </figure>

            <div class="projectDetail__description">
                <p v-html="this.project.description"></p>
            </div>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'projectDetail',
    components: {
        animatedLetters
    },
    data() {
        return {
            projectsArray: [...this.$store.state.projects],
            project: {}
        }
    },
    beforeMount() {
        // Get current project
        this.projectsArray.forEach(project => this.$route.params.project === project.path && (this.project = project));
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.projectDetail {

    &:before {
        content: '';
        width: 5px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 20px;
        background: $white;
    }

    figure {
        width: 200px;
        height: 200px;
        position: absolute;
        top: #{$navHeight + 200};
        right: 0;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

    }

    &__description {
        @include fontM;
    }

}

</style>