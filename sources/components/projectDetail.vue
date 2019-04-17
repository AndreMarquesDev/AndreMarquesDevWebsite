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
                <p>Lighthouse is an open-source, automated tool created by Google for improving the quality of web pages, by running a series of audits that generate a report indicating where and how to improve your page/website. It audits Performance (page speed), Accessibility (for screen readers and such), Best Practices (General development practices) and SEO (search engine optimization)</p>
                <p>Since I only had control over the frontend, I was a bit limited on the possible improvements. I can't control the images sizes (which usually takes a huge toll in performance) or any of the backend behavior. The best I could do was write efficient JavaScript and CSS,write semantic HTML with no unnecessary tags and not use JavaScript plugins that weren't needed.</p>

                <div class="projectDetail__progressCircleContainer">
                    <div class="projectDetail__progressCircle" data-progress="95">
                        <span>95% <small>Performance</small></span>
                    </div>

                    <div class="projectDetail__progressCircle" data-progress="65">
                        <span>65% <small>Accessibility</small></span>
                    </div>

                    <div class="projectDetail__progressCircle" data-progress="75">
                        <span>75% <small>Best Practices</small></span>
                    </div>

                    <div class="projectDetail__progressCircle" data-progress="100">
                        <span>100% <small>SEO</small></span>
                    </div>
                </div>
            </article>

            <article>
                <h2 class="breakpointCircle">Responsive development</h2>

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

$circleBarColor: $white;
$circleCenterColor: $backgroundMainColor;
$circleBackColor: $backgroundMainColor;

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

        p span {
            display: block;
            margin-bottom: 10px;
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

        > * {
            margin-bottom: 40px;

            &:last-child {
                margin-bottom: 0;
            }

        }

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

    &__progressCircleContainer {
        display: flex;
        justify-content: space-around;
    }

    &__progressCircle {
        width: 140px;
        height: 140px;
        position: relative;
        border-radius: 50%;
        background: $circleBarColor;

        span {
            width: 100px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            background: $circleCenterColor;
            @include fontM;
            text-align: center;
            color: $white;
            border-radius: 50%;
            margin: 20px 0 0 20px;
        }

        small {
            @include fontXS;
        }

    }

    $steps: 5; // steps of % for created classes
    $loops: round(100 / $steps);
    $increment: 360 / $loops;
    $half: round($loops / 2);

    @for $i from 0 through $loops {
        [data-progress="#{$i * $steps}"] {
            @if ($i < $half) {
                $nextdeg: 90deg + ($increment * $i);
                background-image: linear-gradient(90deg, $circleBackColor 50%, transparent 50%, transparent), linear-gradient($nextdeg, $circleBarColor 50%, $circleBackColor 50%, $circleBackColor);
            } @else {
                $nextdeg: -90deg + ($increment * ($i - $half));
                background-image: linear-gradient($nextdeg, $circleBarColor 50%, transparent 50%, transparent), linear-gradient(270deg, $circleBarColor 50%, $circleBackColor 50%, $circleBackColor);
            }
        }
    }

}

</style>