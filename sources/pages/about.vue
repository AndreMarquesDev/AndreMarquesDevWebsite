<template>
    <main>
        <triangleBackground/>
        <navigation/>
        <aboutMe/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import triangleBackground from './../components/triangleBackground.vue';
import navigation from './../components/navigation.vue';
import aboutMe from './../components/aboutMe.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

import scrollReveal from 'scrollreveal';

export default {
    name: 'work',
    components: {
        triangleBackground,
        navigation,
        aboutMe,
        menuOverlay,
        footerNavigation,
        transitionComponent
    },
    mounted() {
        scrollReveal().reveal('.scrollReveal', {
            distance: '200px',
            origin: 'bottom'
        });
    }
}
</script>