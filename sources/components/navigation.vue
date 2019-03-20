<template>
    <header class="navigation" :class="{menuOpen: this.$store.state.menuOpen}" >

        <nav>
            <router-link to="home" class="navigation__logo">
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
        toggleMenu() {
            this.$store.commit('toggleMenu');
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

$navHeight: 80px;

.navigation {
    height: $navHeight;
    overflow: hidden;
    position: fixed;
    width: 100%;
    z-index: 1;

    &.menuOpen {

        .navigation__menuIcon {

            span {
                transform: scale(0);
            }

            &:before {
                transform: translateY(9px) rotate(45deg);
            }

            &:after {
                transform: translateY(-9px) rotate(-45deg);
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
        width: 28px;
        cursor: pointer;

        span, &:before, &:after {
            content: '';
            height: 2px;
            display: block;
            background-color: $white;
            margin: 7px 0;
            border-radius: 4px;
        }

        span {
            @include transition (all, .25s, ease-in-out);
        }

        &:before, &:after {
            @include transition (all, .5s, ease-in-out);
        }

    }

}

</style>