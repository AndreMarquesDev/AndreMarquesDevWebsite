<template>
    <section class="projectDetail mainSection">
        <div class="wrapper">

            <animatedLetters :text="this.project.name"/>

            <figure class="projectDetail__mainImage">
                <picture>
                    <source :srcset="require('../images/' + this.project.image.detail1 + '.webp')" type="image/webp">
                    <source :srcset="require('../images/' + this.project.image.detail1 + '.png')" type="image/jpeg">
                    <img :src="require('../images/' + this.project.image.detail1 + '.png')" :alt="this.project.name">
                </picture>
            </figure>

            <article>
                <h2 class="threeDHover" data-text="Summary">Summary</h2>
                <p v-html="this.project.description"></p>
            </article>

            <article>
                <h2 class="threeDHover" data-text="My role">My role</h2>
                <p v-html="this.project.myRole"></p>
            </article>

            <article>
                <h2 class="threeDHover" data-text="Responsive development">Responsive development</h2>

                <!-- <div class="projectDetail__slider"> -->
                <div class="projectDetail__slider" data-flickity='{ "wrapAround": true, "pageDots": true }'>
                    <figure class="projectDetail__detailImage">
                        <picture>
                            <source :srcset="require('../images/' + this.project.image.detail2 + '.webp')" type="image/webp">
                            <source :srcset="require('../images/' + this.project.image.detail2 + '.png')" type="image/jpeg">
                            <img :src="require('../images/' + this.project.image.detail2 + '.png')" :alt="this.project.name">
                        </picture>
                    </figure>
                    <figure class="projectDetail__detailImage">
                        <picture>
                            <source :srcset="require('../images/' + this.project.image.detail2 + '.webp')" type="image/webp">
                            <source :srcset="require('../images/' + this.project.image.detail2 + '.png')" type="image/jpeg">
                            <img :src="require('../images/' + this.project.image.detail2 + '.png')" :alt="this.project.name">
                        </picture>
                    </figure>
                    <figure class="projectDetail__detailImage">
                        <picture>
                            <source :srcset="require('../images/' + this.project.image.detail2 + '.webp')" type="image/webp">
                            <source :srcset="require('../images/' + this.project.image.detail2 + '.png')" type="image/jpeg">
                            <img :src="require('../images/' + this.project.image.detail2 + '.png')" :alt="this.project.name">
                        </picture>
                    </figure>
                </div>
            </article>

            <article>
                <h2 class="threeDHover" data-text="Lighthouse results">Lighthouse results</h2>
                <p>Lighthouse is an open-source, automated tool created by Google for improving the quality of web pages. It runs a series of audits that generate a report indicating where and how to improve your page/website. It audits Performance (page speed), Accessibility (for screen readers and such), Best Practices (General development practices) and SEO (search engine optimization)</p>
                <p>Since I only had control over the frontend, I was a bit limited on the possible improvements. I can't control the images sizes (which usually takes a huge toll in performance) or any of the backend behavior. The best I could do was write efficient JavaScript and CSS, write semantic HTML with no unnecessary tags and not use JavaScript plugins that weren't needed.</p>

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

    .animatedLetters {
        position: relative;
        margin-bottom: 70px;

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
    }

    &__detailImage {
        width: 50%;
        position: relative;
        top: 0;
        right: 0;
        overflow: hidden;
        transform: scale(.6);
        @include transition (transform, .5s);

        &.is-selected {
            transform: scale(1);

            &:hover {
                transform: scale(1.1);
            }

        }

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

    @include tablet {
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

    @include mobile {
        .wrapper {
            padding: 0 30px;

            &:before {
                left: 10px;
            }

        }

        .animatedLetters {
            font-size: 25px;
            margin-bottom: 40px;

            &:before {
                width: 14px;
                height: 14px;
                left: -24px;
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
    }

}

</style>