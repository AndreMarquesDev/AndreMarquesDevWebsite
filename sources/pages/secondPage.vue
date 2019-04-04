<template>
    <main>
        <shapesBackground/>
        <navigation/>
        <main-content url="home" destination="the first page"/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import shapesBackground from './../components/shapesBackground.vue';
import navigation from './../components/navigation.vue';
import mainContent from './../components/mainContent.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

export default {
    name: 'secondPage',
    components: {
        shapesBackground,
        navigation,
        mainContent,
        menuOverlay,
        footerNavigation,
        transitionComponent
    }
}
</script>