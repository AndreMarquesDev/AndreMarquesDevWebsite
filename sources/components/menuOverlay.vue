<template>
    <section class="menu" :class="{menuOpen: this.$store.state.menuOpen}" @click="toggleMenu">

        <nav>
            <ul class="menu__links">
                <li>
                    <router-link to="/about" aria-label="Link to about page">{{ menuLinks.about }}</router-link>
                    <span :text="menuLinks.about"></span>
                </li>
                <li>
                    <router-link to="/work" aria-label="Link to work page">{{ menuLinks.work }}</router-link>
                    <span :text="menuLinks.work"></span>
                </li>
                <li>
                    <router-link to="/contact" aria-label="Link to contact page">{{ menuLinks.contact }}</router-link>
                    <span :text="menuLinks.contact"></span>
                </li>
            </ul>
        </nav>

    </section>
</template>

<script>
export default {
    name: 'menuOverlay',
    data() {
        return {
            menuLinks: {
                about: 'About',
                work: 'Work',
                contact: 'Contact'
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

    nav {
        height: inherit;
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