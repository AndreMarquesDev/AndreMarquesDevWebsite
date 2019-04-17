<template>
    <section class="projectDetail mainSection">
        <div class="wrapper">

            <animatedLetters :text="this.project.name" class="breakpointCircle"/>

            <div class="projectDetail__description">
                <article>
                    <h2>Summary</h2>
                    <p v-html="this.project.description"></p>
                </article>

                <figure class="projectDetail__mainImage">
                    <picture>
                        <source :srcset="require('../images/' + this.project.image.detail1 + '.webp')" type="image/webp">
                        <source :srcset="require('../images/' + this.project.image.detail1 + '.png')" type="image/jpeg">
                        <img :src="require('../images/' + this.project.image.detail1 + '.png')" :alt="this.project.name">
                    </picture>
                </figure>

                <article>
                    <h2>My role</h2>
                    <p v-html="this.project.myRole"></p>
                </article>
            </div>

            <article>
                <h2 class="breakpointCircle">Lighthouse results</h2>
                <p>Lighthouse</p>
            </article>

            <article>
                <h2 class="breakpointCircle">Responsive web</h2>

                <figure class="projectDetail__detailImage">
                    <picture>
                        <source :srcset="require('../images/' + this.project.image.detail2 + '.webp')" type="image/webp">
                        <source :srcset="require('../images/' + this.project.image.detail2 + '.png')" type="image/jpeg">
                        <img :src="require('../images/' + this.project.image.detail2 + '.png')" :alt="this.project.name">
                    </picture>
                </figure>
            </article>

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

    .wrapper {
        position: relative;
        padding: 0 50px;

        &:before {
            content: '';
            width: 5px;
            height: 100%;
            position: absolute;
            top: 20px;
            left: 20px;
            background: $lightGrey;
            opacity: .3;
        }

    }

    .breakpointCircle {
        position: relative;

        &:before {
            content: '';
            width: 17px;
            height: 17px;
            position: absolute;
            top: 50%;
            left: -36px;
            transform: translateY(-50%);
            background: $lightGrey;
            border-radius: 50%;
        }

    }

    .animatedLetters {
        position: relative;
        margin-bottom: 70px;
    }

    &__description {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2%;

        > article {
            padding-left: 20px;
        }

    }

    &__mainImage {
        width: 100%;
        grid-row: span 2;
        position: relative;
        top: 0;
        right: 0;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
        }

    }

    article {
        width: 100%;
        @include fontM;
        margin-bottom: 40px;

        h2 {
            @include fontL ($darkOrange);
            letter-spacing: 2.5px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

    }

    &__detailImage {
        width: 100%;
        position: relative;
        top: 0;
        right: 0;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
        }

    }

}

</style>