<template>
    <footer>
        <small>
            Designed by
            <a
                href="https://www.instagram.com/aguareladigital"
                target="_blank"
                rel="noreferrer"
                aria-label="Aguarela Instagram"
                class="alternativeLink"
            >Aguarela Digital</a>
        </small>

        <nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/andremarquesdev"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Check out my LinkedIn"
                    >
                        <fontAwesomeIcon :icon="['fab', 'linkedin-in']" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/AndreMarquesDev"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Check out my GitHub"
                    >
                        <fontAwesomeIcon :icon="['fab', 'github']" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://codepen.io/AndreMarquesDev"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Check out my CodePen"
                    >
                        <fontAwesomeIcon :icon="['fab', 'codepen']" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/BazingaCS"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Check out my Twitter"
                    >
                        <fontAwesomeIcon :icon="['fab', 'twitter']" />
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script>
export default {
    name: "footerNavigation",
};
</script>

<style lang='scss'>
@import "../styles/variables.scss";

footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    padding: 40px 20px;

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

    @include mobile {
        .svg-inline--fa {
            margin: 0 7px;
        }
    }
}
</style>