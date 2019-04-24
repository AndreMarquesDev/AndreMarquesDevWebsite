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

        // ver isto que tá a dar undefined às vezes
        // e meter os quadrados dos projects on load para corrigir aquele bug e tirar o height do css e do make items square

        // On desktop, the last element of the page was sometimes not being shown at all
        window.addEventListener('scroll', event => {
            // if (!this.$el.querySelector('.scrollReveal').length) return;
            // console.log(this.$el.querySelector('.scrollReveal').length);
            // console.log(!this.$el.querySelector('.scrollReveal').length);

            // // If scroll is at the bottom
            // console.log(this.$el);
            // console.log(this.$el.parentElement);
            window.innerHeight + window.scrollY === this.$el.parentElement.offsetHeight && setTimeout(() => scrollReveal().destroy(), 700);
        })
    }
}
</script>