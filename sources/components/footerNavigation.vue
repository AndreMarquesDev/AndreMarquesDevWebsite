<template>
    <footer>

        <small>Designed by <a href="https://www.instagram.com/aguarela.project" target="_blank" rel="noreferrer" class="alternativeLink">Aguarela</a></small>

        <nav>
            <ul>
                <li>
                    <a href="https://github.com/AndreMarquesDev" target="_blank" rel="noreferrer" aria-label="Check out my GitHub">
                        <fontAwesomeIcon :icon="['fab', 'github']" />
                    </a>
                </li>
                <li>
                    <a href="https://codepen.io/AndreMarquesDev" target="_blank" rel="noreferrer" aria-label="Check out my CodePen">
                        <fontAwesomeIcon :icon="['fab', 'codepen']" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/BazingaCS" target="_blank" rel="noreferrer" aria-label="Check out my Twitter">
                        <fontAwesomeIcon :icon="['fab', 'twitter']" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/andr%C3%A9-gouveia-marques-675ab3127" target="_blank" rel="noreferrer" aria-label="Check out my LinkedIn">
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
        color: $white;
    }

    .alternativeLink:before {
        bottom: -5px;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

}

</style>