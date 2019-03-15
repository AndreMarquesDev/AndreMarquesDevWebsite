<template>
    <header class="navigation">

        <nav>
            <router-link to="home" class="navigation__logo">
                <img src="../images/logo.svg" alt="logo">
            </router-link>

            <i class="navigation__menuIcon" @click="toggleMenu"><span></span></i>

            <ul class="navigation__socialLinks">
                <li>
                    <a href="https://github.com/AndreMarquesDev" target="_blank">
                        <fontAwesomeIcon :icon="['fab', 'github']" />
                    </a>
                </li>
                 <li>
                    <a href="https://codepen.io/AndreMarquesDev/" target="_blank">
                        <fontAwesomeIcon :icon="['fab', 'codepen']" />
                    </a>
                </li>
                 <li>
                    <a href="https://twitter.com/BazingaCS" target="_blank">
                        <fontAwesomeIcon :icon="['fab', 'twitter']" />
                    </a>
                </li>
            </ul>
        </nav>

    </header>
</template>

<script>
export default {
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
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
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

    &__socialLinks {
        display: flex;
    }

}

</style>