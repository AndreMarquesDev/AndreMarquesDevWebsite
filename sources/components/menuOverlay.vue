<template>
    <section class="menu" :class="{menuOpen: this.$store.state.menuOpen}" @click="toggleMenu">

        <nav class="menu__links">
            <li>
                <router-link to="/work">{{ menuLinks.link1 }}</router-link>
                <span :text="menuLinks.link1"></span>
            </li>
            <li>
                <router-link to="/about">{{ menuLinks.link2 }}</router-link>
                <span :text="menuLinks.link2"></span>
            </li>
            <li>
                <router-link to="/secondPage">{{ menuLinks.link3 }}</router-link>
                <span :text="menuLinks.link3"></span>
            </li>
        </nav>

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
        toggleMenu(event) {
            this.$store.commit('toggleMenu', {event});
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.menu {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($black, .7);
    opacity: 0;
    pointer-events: none;
    @include transition (opacity, .4s, ease-in-out);

    &.menuOpen {
        opacity: 1;
        pointer-events: initial;

        .menu__links {
            left: 0;
        }

    }

    &__links {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 50%;
        left: -100%;
        transform: translateY(-50%);
        overflow: hidden;
        z-index: 1;
        @include transition (left, .4s, ease-in-out);

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

            &:hover {

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

}

</style>