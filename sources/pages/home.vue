<template>
    <main>
        <shapesBackground/>
        <navigation/>
        <homepage/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import shapesBackground from './../components/shapesBackground.vue';
import navigation from './../components/navigation.vue';
import homepage from './../components/homepage.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

export default {
    name: 'home',
    components: {
        shapesBackground,
        navigation,
        homepage,
        menuOverlay,
        footerNavigation,
        transitionComponent
    }
}
</script>