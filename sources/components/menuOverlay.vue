<template>
    <section class="menu" :class="{menuOpen: this.$store.state.menuOpen}" @click="toggleMenu" @mousemove="polygonsAnimation">

        <nav class="menu__links">
            <li @click="activeLink">
                <router-link to="/">{{ menuLinks.link1 }}</router-link>
                <span :text="menuLinks.link1"></span>
            </li>
            <li @click="activeLink">
                <router-link to="/">{{ menuLinks.link2 }}</router-link>
                <span :text="menuLinks.link2"></span>
            </li>
            <li @click="activeLink">
                <router-link to="/secondPage">{{ menuLinks.link3 }}</router-link>
                <span :text="menuLinks.link3"></span>
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
    name: 'menuOverlay',
    data() {
        return {
            menuLinks: {
                link1: 'Work',
                link2: 'About',
                link3: '2nd Page'
            }
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu');
        },
        activeLink() {
            event.currentTarget.classList.add('active');
        },
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
$navHeight: 80px;

.menu {
    width: 100%;
    height: calc(100vh - #{$navHeight});
    position: absolute;
    top: $navHeight;
    left: -100%;
    @include transition (left, .4s, ease-in-out);
    position: fixed;

    &.menuOpen {
        left: 0;

        .navigation__polygons {
            // display: block;
        }

    }

    &__links {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
        overflow: hidden;
        z-index: 1;

        li {
            width: 100%;
            position: relative;
            @include fontGiant ($white);
            font-weight: $fontBold;
            color: transparent;
            letter-spacing: 5px;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 10%;

            &.active, &:hover {

                > span, > span:before {
                    transform: translateY(0);
                    @include transition (transform, .4s);
                }

            }

            &:last-child {
                margin-bottom: 0;
            }

            a {
                display: block;
                position: relative;
                color: inherit;
                -webkit-text-stroke: 1px $white;
                z-index: 1;
            }

            > span {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                transform: translateY(100%);
                color: $white;
                overflow: hidden;
                @include transition (transform, .4s);

                &:before {
                    content: attr(text);
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: translateY(-100%);
                    color: $white;
                    @include transition (transform, .4s);
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