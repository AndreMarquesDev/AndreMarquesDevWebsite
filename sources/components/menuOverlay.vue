<template>
    <section class="menu" :class="{open: this.$store.state.menuOpen}" @mousemove="polygonsAnimation">

        <nav>
            <li>
                <router-link to="/">Work</router-link>
                <div>
                    <span>Work</span>
                </div>
            </li>
            <li>
                <router-link to="/">About</router-link>
                <div>
                    <span>About</span>
                </div>
            </li>
            <li>
                <router-link to="/">Contact</router-link>
                <div>
                    <span>Contact</span>
                </div>
            </li>
        </nav>

        <div class="menu__polygons">
            <div class="leftContainer">
                <div class="left"></div>
                <div class="left"></div>
                <div class="left"></div>
                <div class="left"></div>
                <div class="left"></div>
            </div>
            <div class="rightContainer">
                <div class="right"></div>
                <div class="right"></div>
                <div class="right"></div>
                <div class="right"></div>
                <div class="right"></div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    methods: {
        polygonsAnimation() {
            const polygonsContainer = this.$el.querySelector('.menu__polygons'),
                x = event.pageX - event.target.offsetLeft,
                y = event.pageY - event.target.offsetTop;

            polygonsContainer.style.right = x / 10 + 'px';
            polygonsContainer.style.top = `calc(15% + ${y / 10}px)`;
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

$clipPathPolygonRight: polygon(50% 0, 100% 0, 50% 100%, 0% 100%);
$clipPathPolygonLeft: polygon(0 0, 50% 0, 100% 100%, 50% 100%);

.menu {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: -100%;
    @include transition (left, .4s);

    &.open {
        left: 0;

        .navigation__polygons {
            // display: block;
        }

        // .navigation__menuIcon {

        //     span {
        //         transform: scale(0);
        //     }

        //     &:before {
        //         transform: translateY(9px) rotate(45deg);
        //     }

        //     &:after {
        //         transform: translateY(-9px) rotate(-45deg);
        //     }

        // }

    }

    nav {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
        overflow: hidden;
        z-index: 1;

        li {
            @include fontGiant ($white);
            font-weight: $fontBold;
            color: transparent;
            letter-spacing: 5px;
            text-transform: uppercase;
            margin-bottom: 10%;
            @include transition (color, .2s, ease-out);
            overflow: hidden;
            position: relative;

            &:last-child {
                margin-bottom: 0;
            }

            &:hover {
                // color: $white;

                a {
                    // -webkit-text-stroke: 1px $white;
                }

                > div, span {
                    transform: translateY(0%);
                @include transition (transform, .2s);
                }

            }

            a {
                color: inherit;
                -webkit-text-stroke: 1px $white;
            }

            > div {
                content: 'teste';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                transform: translateY(100%);
                color: $white;
                @include transition (transform, .2s);
                overflow: hidden;

                span {
                    color: red;
                    position: absolute;
                    transform: translateY(-100%);
                }
            }

        }

    }

    &__polygons {
        display: none;
        width: 75vw;
        position: absolute;
        @include transition;

        .leftContainer, .rightContainer {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
        }

        .left, .right {
            width: 85px;
            height: 70px;
            background: transparent;
            position: relative;
            border: 2px solid $white;
            clip-path: $clipPathPolygonRight;

            &:before, &:after {
                content: '';
                width: 2px;
                height: 120%;
                display: block;
                background: $white;
                position: absolute;
                top: -10%;
                transform: rotate(211.5deg);
            }

            &:before {
                left: 24%;
            }

            &:after {
                right: 24%;
            }

        }

        .left {
            left: -15%;

            &:nth-of-type(even) {
                left: 0;
                clip-path: $clipPathPolygonLeft;

                &:before, &:after {
                    transform: rotate(-211.5deg);
                }

            }

        }

        .right {
            left: 95%;
            clip-path: $clipPathPolygonLeft;

            &:before, &:after {
                transform: rotate(-211.5deg);
            }

            &:nth-of-type(even) {
                left: 80%;
                clip-path: $clipPathPolygonRight;

                &:before, &:after {
                    transform: rotate(211.5deg);
                }

            }

        }

    }

}

</style>