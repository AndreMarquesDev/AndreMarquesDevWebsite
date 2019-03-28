<template>
    <footer>

        <small>André Marques</small>

        <nav>
            <ul>
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
                <li>
                    <a href="https://twitter.com/BazingaCS" target="_blank">
                        <fontAwesomeIcon :icon="['fab', 'linkedin-in']" />
                    </a>
                </li>
            </ul>
        </nav>

    </footer>
</template>

<script>
export default {
    name: 'footerNavigation'
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    perspective: 800px;
    padding: 40px 4%;

    small {
        position: relative;
        color: $white;
        transform-style: preserve-3d;
        @include transition (all, .4s);

        &:before {
            content: 'André Marques';
            width: 100%;
            height: 100%;
            position: absolute;
            top: -100%;
            transform-origin: 0% 100%;
            transform: rotateX(90deg);
        }

        &:hover {
            transform-origin: 50% 100%;
            transform: rotateX(-90deg) translateY(100%);
        }

    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

}

</style>