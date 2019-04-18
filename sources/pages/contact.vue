<template>
    <main>
        <shapesBackground/>
        <navigation/>
        <contactForm/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import shapesBackground from './../components/shapesBackground.vue';
import navigation from './../components/navigation.vue';
import contactForm from './../components/contactForm.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

import scrollReveal from 'scrollreveal';

export default {
    name: 'contact',
    components: {
        shapesBackground,
        navigation,
        contactForm,
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