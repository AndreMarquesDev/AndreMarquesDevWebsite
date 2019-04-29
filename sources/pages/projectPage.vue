<template>
    <main>
        <triangleBackground/>
        <navigation/>
        <projectDetail/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import triangleBackground from './../components/triangleBackground.vue';
import navigation from './../components/navigation.vue';
import projectDetail from './../components/projectDetail.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

import scrollReveal from 'scrollreveal';

export default {
    name: 'projectPage',
    components: {
        triangleBackground,
        navigation,
        projectDetail,
        menuOverlay,
        footerNavigation,
        transitionComponent
    },
    mounted() {
        scrollReveal().reveal('.scrollReveal', {
            distance: '200px',
            origin: 'bottom',
            cleanup: true
        });

        // On desktop, the last element of the page was sometimes not being shown at all
        window.addEventListener('scroll', event => {
            // If scroll is at the bottom
            // this.$el was returning null when changed page
            window.innerHeight + window.scrollY === document.querySelector('#app').offsetHeight && setTimeout(() => scrollReveal().destroy(), 600);
        })
    }
}
</script>