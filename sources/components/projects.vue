<template>
    <section class="projects mainSection">
        <div class="wrapper">
            <animatedLetters text="<projects/>" :shouldAnimate="true" />

            <ul>
                <li
                    v-for="project in projects"
                    :project="project.name"
                    @mouseenter="addSlideAnimation($event, 'in')"
                    @mouseleave="addSlideAnimation($event, 'out')"
                >
                    <router-link
                        :to="{
                            name: 'projectPage',
                            params: {
                                project: project.path,
                                projectName: project.name,
                            },
                        }"
                        aria-label="Link to project page"
                    >
                        <figure>
                            <picture>
                                <source
                                    :srcset="
                                        require('../images/' +
                                            project.image.thumbnail +
                                            '.webp')
                                    "
                                    type="image/webp"
                                />
                                <source
                                    :srcset="
                                        require('../images/' +
                                            project.image.thumbnail +
                                            '.jpg')
                                    "
                                    type="image/jpeg"
                                />
                                <img
                                    :src="
                                        require('../images/' +
                                            project.image.thumbnail +
                                            '.jpg')
                                    "
                                    :alt="project.name"
                                    @load="makeItemsSquare"
                                />
                            </picture>
                            <span
                                :projectName="project.name"
                                class="overlay"
                            ></span>
                        </figure>
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import "intersection-observer";
import animatedLetters from "./../components/animatedLetters.vue";

export default {
    name: "projects",
    components: {
        animatedLetters,
    },
    data() {
        return {
            projects: this.$store.state.projects,
        };
    },
    mounted() {
        const projects = this.$el.querySelectorAll("li");
        window.addEventListener("resize", () =>
            projects.forEach((project) => this.makeItemsSquare(project))
        );

        if (window.innerWidth < 570) this.mobileSlideAnimationBehavior();
    },
    methods: {
        makeItemsSquare(element) {
            element =
                event.target.tagName === "IMG"
                    ? event.target.closest("li")
                    : element;
            element.style.height = element.offsetWidth + "px";
        },

        addSlideAnimation(event, action) {
            this.$store.commit("addSlideAnimation", { event, action });
        },

        mobileSlideAnimationBehavior() {
            const projectsElements = this.$el.querySelectorAll("li");
            let previousY = 0;

            const projectObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            // window.pageYOffset was reporting wrong values so this setTimeout was needed
                            // to actually report the offsetY of the current element being evaluated
                            setTimeout(() => {
                                const project = entry.target;

                                // Scroll down
                                if (previousY <= window.pageYOffset) {
                                    project.className = "slide-in-top";

                                    projectsElements.forEach((element) => {
                                        project.getAttribute("project") !==
                                            element.getAttribute("project") &&
                                            element.matches(
                                                ".slide-in-top, .slide-in-bottom"
                                            ) &&
                                            (element.className =
                                                "slide-out-bottom");
                                    });

                                    // Scroll up
                                } else {
                                    project.className = "slide-in-bottom";

                                    projectsElements.forEach((element) => {
                                        project.getAttribute("project") !==
                                            element.getAttribute("project") &&
                                            element.matches(
                                                ".slide-in-top, .slide-in-bottom"
                                            ) &&
                                            (element.className =
                                                "slide-out-top");
                                    });
                                }

                                previousY = window.pageYOffset;
                            }, 100);
                        }
                    });
                },
                {
                    threshold: 1.0,
                }
            );

            projectsElements.forEach((project) =>
                projectObserver.observe(project)
            );
        },
    },
};
</script>

<style lang='scss'>
@import "../styles/variables.scss";

.projects {
    .animatedLetters {
        @include fontXXL;
        font-weight: $fontBold;
        margin-bottom: 40px;
    }

    ul {
        width: 100%;
        display: grid;
        grid-template: auto / repeat(2, minmax(200px, 500px));
        grid-gap: 100px 3%;
        justify-content: space-around;
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
            opacity: 0.15;
            @include transition(
                opacity,
                0.4s
            ); // should be equal or higher than the direction aware animation (on <span>)
            z-index: 1;
        }

        &:hover:before {
            opacity: 0.5;
        }

        span {
            // overlay
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            @include fontGiant($black);
            font-weight: $fontBold;
            letter-spacing: 6.5px; // So that 'Corporate' fits
            text-align: center;
            background: $white;
            mix-blend-mode: color-dodge;
            transform: translate3d(0, -100%, 0);
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
            width: 100%;
            height: 100%;
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    @include phablet {
        figure span {
            @include fontXXL($black);
        }
    }

    @include mq(0, 569px) {
        padding: calc(#{$navHeight + 20}) 0 calc(#{$footerHeight + 20});

        ul {
            grid-template-columns: 1fr;
            grid-gap: 50px;
        }

        li.slide-in-top figure:before,
        li.slide-in-bottom figure:before {
            opacity: 0.5;
        }

        figure {
            &:hover:before {
                opacity: 0.15;
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