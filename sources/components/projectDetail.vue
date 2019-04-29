<template>
    <section class="projectDetail mainSection">
        <div class="wrapper">

            <animatedLetters :text="this.project.name"/>
            <animatedLetters :text="` - ${this.project.year}`"/>

            <figure class="projectDetail__mainImage scrollReveal">
                <picture>
                    <source :srcset="require('../images/' + this.project.image.detailMain + '.webp')" type="image/webp">
                    <source :srcset="require('../images/' + this.project.image.detailMain + '.png')" type="image/png">
                    <img :src="require('../images/' + this.project.image.detailMain + '.png')" :alt="this.project.name">
                </picture>
            </figure>

            <article class="scrollReveal">
                <h2 class="threeDHover" data-text="Summary">Summary</h2>
                <p v-html="this.project.description"></p>
            </article>

            <article class="scrollReveal">
                <h2 class="threeDHover" data-text="My role">My role</h2>
                <p v-html="this.project.myRole"></p>
            </article>

            <article class="scrollReveal">
                <h2 class="threeDHover" data-text="Responsive development">Responsive development</h2>

                <figure class="projectDetail__detailImage">
                    <picture>
                        <source :srcset="require('../images/' + this.project.image.detailResponsive + '.webp')" type="image/webp">
                        <source :srcset="require('../images/' + this.project.image.detailResponsive + '.png')" type="image/png">
                        <img :src="require('../images/' + this.project.image.detailResponsive + '.png')" :alt="this.project.name">
                    </picture>
                </figure>
            </article>

            <article class="scrollReveal" v-if="this.project.image.slider">
                <h2 class="threeDHover" data-text="Lighthouse results">Lighthouse results</h2>
                <p>Lighthouse is an open-source, automated tool created by Google for improving the quality of web pages. It runs a series of audits that generate a report indicating where and how to improve your page/website. It audits Performance (page speed), Accessibility (for invisuals using screen readers for example), Best Practices (general development practices) and SEO (search engine optimization)</p>
                <p>{{ this.project.lighthouseText }}</p>

                <ul class="projectDetail__progressCircleContainer">
                    <li v-for="(result, key) in project.lighthouseResults" :progress="result" class="projectDetail__progressCircle">
                        <span>{{ result }} <small>{{ key }}</small></span>
                    </li>
                </ul>
            </article>

            <article class="scrollReveal" v-if="this.project.lighthouseResults">
                <h2 class="threeDHover" data-text="More pages">More pages</h2>

                <div class="projectDetail__slider">
                    <figure class="projectDetail__detailImage" v-for="image in project.image.slider">
                        <picture>
                            <source :srcset="require('../images/' + image + '.webp')" type="image/webp">
                            <source :srcset="require('../images/' + image + '.jpg')" type="image/jpeg">
                            <img :src="require('../images/' + image + '.jpg')" :alt="project.name" @load="initSlider">
                        </picture>
                    </figure>
                </div>
            </article>

            <article class="scrollReveal">
                <h2 class="threeDHover" data-text="Credits">Credits</h2>

                <ul>
                    <li v-for="area in project.credits">
                        <p>{{ area }}</p>
                    </li>
                </ul>
            </article>

        </div>
    </section>
</template>

<script>
import flickity from 'flickity';
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
    methods: {
        initSlider() {
            const sliderContainer = sliderContainer || this.$el.querySelector('.projectDetail__slider'),
                sliderHeightElement = sliderContainer.firstChild;

            // this runs on img load because otherwise the slider would bugged since it ran before the whole image was there
            const slider = new flickity(sliderContainer, {
                wrapAround: true,
                pageDots: true,
                adaptiveHeight: true
            });

            // the height was bugged after setting 'adaptiveHeight' to true
            slider.on('change', () => sliderHeightElement.style.height = sliderContainer.querySelector('.is-selected').offsetHeight);
        }
    },
    beforeMount() {
        // Get current project
        this.projectsArray.forEach(project => this.$route.params.project === project.path && (this.project = project));

        // Set document title
        this.$route.meta.title = this.project.name + this.$route.meta.title;
        document.title = this.$route.meta.title;
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

$circleBarColor: $white;
$circleCenterColor: $backgroundMainColor;
$circleBackColor: $backgroundMainColor;

.projectDetail {

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: url('../images/projectDetailBackground.png') no-repeat center/cover;
    }

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

    .animatedLetters {
        width: auto;
        display: inline-block;
        position: relative;
        margin-bottom: 70px;

        &:first-of-type:before {
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

        &:last-of-type {
            font-size: 20px;
            vertical-align: text-bottom;
            margin-bottom: 0;
        }

    }

    article {
        width: 100%;
        @include fontM;
        text-align: justify;
        margin-bottom: 40px;

        > * {
            margin-bottom: 40px;

            &:last-child {
                margin-bottom: 0;
            }

        }

        h2 {
            position: relative;
            @include fontL ($darkOrange);
            font-weight: $fontBold;
            letter-spacing: 3px;
            text-transform: uppercase;
            margin-bottom: 20px;

            &:after {
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

            &.threeDHover:before {
                content: attr(data-text);
            }

        }

        p span {
            display: block;
            margin-bottom: 20px;
        }

    }

    &__mainImage {
        width: 50%;
        float: right;

        img {
            width: 100%;
            height: auto;
        }

    }

    &__slider {
        width: 95%;
        margin: auto;

        .projectDetail__detailImage {
            width: 50%;
            top: 50%;
            transform: translateY(-50%) scale(.6);
            transition: transform .5s ease 0s, top .7s ease 0s;

            &.is-selected {
                top: 0;
                transform: scale(1);

                &:hover {
                    transform: scale(1.1);
                }

            }
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

    // Flickity slider

    .flickity-button-icon {
        fill: $white;
    }

    .flickity-prev-next-button {
        @include transition;

        &:hover {
            opacity: 1;
        }

    }

    .flickity-prev-next-button.previous {
        left: -50px;

        &:hover {
            left: -55px;
        }

    }

    .flickity-prev-next-button.next {
        right: -50px;

        &:hover {
            right: -55px;
        }

    }

    .flickity-page-dots {
        display: none;

        .dot {
            background: $white;
        }

    }

    &__progressCircleContainer {
        display: grid;
        grid-template: 140px / repeat(4, 140px);
        grid-column-gap: 2%;
        justify-content: space-around;
    }

    &__progressCircle {
        position: relative;
        border-radius: 50%;
        background: $circleBarColor;
        @include transition (transform, .5s);

        &:hover {
            transform: scale(1.2);
        }

        span {
            width: 100px;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: absolute;
            background: $circleCenterColor;
            @include fontL;
            font-weight: $fontBold;
            text-align: center;
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
        [progress="#{$i * $steps}"] {
            @if ($i < $half) {
                $nextdeg: 90deg + ($increment * $i);
                background-image: linear-gradient(90deg, $circleBackColor 50%, transparent 50%, transparent), linear-gradient($nextdeg, $circleBarColor 50%, $circleBackColor 50%, $circleBackColor);
            } @else {
                $nextdeg: -90deg + ($increment * ($i - $half));
                background-image: linear-gradient($nextdeg, $circleBarColor 50%, transparent 50%, transparent), linear-gradient(270deg, $circleBarColor 50%, $circleBackColor 50%, $circleBackColor);
            }
        }
    }

    @include tablet {
        &__slider {
            width: 100%;

            .projectDetail__detailImage {
                width: 100%;
                transform: none;

                &.is-selected:hover {
                    transform: none;
                }
            }

        }

        .flickity-prev-next-button {
            display: none;
        }

        .flickity-page-dots {
            display: block;
        }

        &__progressCircleContainer {
            grid-template: repeat(2, 140px) / repeat(2, 140px);
            grid-gap: 40px 0;
        }

        &__progressCircle span {
            font-size: 24px;
            line-height: 33px;
            letter-spacing: -.2px;
        }
    }

    @include mq (0, 640px) {
        .wrapper {
            padding: 0 30px;

            &:before {
                left: 10px;
            }

        }

        .animatedLetters {
            font-size: 25px;
            margin-bottom: 40px;

            &:first-of-type:before {
                width: 14px;
                height: 14px;
                left: -24px;
            }

            &:last-of-type {
                font-size: 14px;
            }

        }

        article h2:after {
            width: 14px;
            height: 14px;
            left: -24px;
        }

        &__mainImage {
            width: 100%;
            float: none;
            margin-bottom: 40px;
        }

        &__progressCircleContainer {
            grid-template: repeat(2, 100px) / repeat(2, 100px);
        }

        &__progressCircle {

            span {
                width: 70px;
                height: 70px;
                line-height: 25px;
                margin: 15px 0 0 15px;
                padding: 0 9px;
            }

            small {
                font-size: 8px;
                line-height: 10px;
            }

        }
    }

}

</style>