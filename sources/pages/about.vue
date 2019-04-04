<template>
    <main>
        <shapesBackground/>
        <navigation/>
        <aboutMe/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import shapesBackground from './../components/shapesBackground.vue';
import navigation from './../components/navigation.vue';
import aboutMe from './../components/aboutMe.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

export default {
    name: 'work',
    components: {
        shapesBackground,
        navigation,
        aboutMe,
        menuOverlay,
        footerNavigation,
        transitionComponent
    }
}
</script>