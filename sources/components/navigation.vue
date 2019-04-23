<template>
    <header class="navigation" :class="{menuOpen: this.$store.state.menuOpen}" >

        <nav>
            <router-link to="/" class="navigation__logo" aria-label="Link to homepage">
                <img src="../images/logo.svg" alt="logo">
            </router-link>

            <i class="navigation__menuIcon" @click="toggleMenu"><span></span></i>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'navigation',
    methods: {
        toggleMenu(event) {
            this.$store.commit('toggleMenu', {event});
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.navigation {
    width: 100%;
    height: $navHeight;
    position: absolute;
    overflow: hidden;
    z-index: 1;

    &.menuOpen {
        position: fixed;

        .navigation__menuIcon {

            &:before {
                animation: topToCross .7s ease forwards;
            }

            span {
                animation: middleToCross .7s ease forwards;
            }

            &:after {
                animation: bottomToCross .7s ease forwards;
            }

        }

    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4%;
        z-index: 1;
    }

    &__logo {
        max-width: 200px;

        img {
            max-height: $navHeight;
            height: 100%;
        }

    }

    &__menuIcon {
        width: 40px;
        cursor: pointer;

        &:hover {
            &:before {
                animation: topToBurguer .7s ease forwards, menuHover 1s infinite ease-in-out alternate;
            }

            span {
                animation: middleToBurguer .7s ease forwards, menuHover 1s infinite ease-in-out alternate forwards 200ms;
            }

            &:after {
                animation: bottomToBurguer .7s ease forwards, menuHover 1s infinite ease-in-out alternate forwards 400ms;
            }
        }

        &:before, span, &:after {
            content: '';
            width: 100%;
            height: 2px;
            display: block;
            position: relative;
            background: $white;
            border-radius: 3px;
        }

        &:before {
            margin: 0 auto;
            animation: topToBurguer .7s ease forwards;
        }

        span {
            margin: 10px auto 0;
            animation: middleToBurguer .7s ease forwards;
        }

        &:after {
            margin: 10px auto 0;
            animation: bottomToBurguer .7s ease forwards;
        }

    }

    @include tablet {
        &__menuIcon:hover {
            &:before {
                animation: topToBurguer .7s ease forwards;
            }

            span {
                animation: middleToBurguer .7s ease forwards;
            }

            &:after {
                animation: bottomToBurguer .7s ease forwards;
            }
        }
    }

}

</style>