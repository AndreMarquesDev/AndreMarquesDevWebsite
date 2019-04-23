<template>
    <main>
        <triangleBackground/>
        <navigation/>
        <projects/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import triangleBackground from './../components/triangleBackground.vue';
import navigation from './../components/navigation.vue';
import projects from './../components/projects.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

import scrollReveal from 'scrollreveal';

export default {
    name: 'work',
    components: {
        triangleBackground,
        navigation,
        projects,
        menuOverlay,
        footerNavigation,
        transitionComponent
    },
    mounted() {
        scrollReveal().reveal('.scrollReveal', {
            distance: '200px',
            origin: 'bottom'
        });

        // On 'projectDetail.vue', the <article> right after the slider would stay hidden on hard refresh;
        // this is a 'just in case' that solves it and eventual future bugs.
        setTimeout(() => scrollReveal().destroy(), 900);
    }
}
</script>