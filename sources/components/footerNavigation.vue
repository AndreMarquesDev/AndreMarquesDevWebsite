<template>
    <footer>

        <small class="threeDHover">André Marques</small>

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

    .threeDHover {
        color: $white;

        &:before {
            content: 'André Marques';
        }

    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

}

</style>