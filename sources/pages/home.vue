<template>
    <main>
        <triangleBackground/>
        <navigation/>
        <homepage/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import triangleBackground from './../components/triangleBackground.vue';
import navigation from './../components/navigation.vue';
import homepage from './../components/homepage.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

import scrollReveal from 'scrollreveal';

export default {
    name: 'home',
    components: {
        triangleBackground,
        navigation,
        homepage,
        menuOverlay,
        footerNavigation,
        transitionComponent
    },
    mounted() {
        scrollReveal().reveal('.scrollReveal', {
            duration: 1000,
            distance: '100%',
            origin: 'bottom',
            // easing: 'ease-out',
            easing: 'cubic-bezier(.46, .03, 0, 1)',
            scale: 3,
            cleanup: true
        });
    }
}
</script>