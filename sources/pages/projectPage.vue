<template>
    <main>
        <shapesBackground/>
        <navigation/>
        <projectDetail/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import shapesBackground from './../components/shapesBackground.vue';
import navigation from './../components/navigation.vue';
import projectDetail from './../components/projectDetail.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

export default {
    name: 'projectPage',
    components: {
        shapesBackground,
        navigation,
        projectDetail,
        menuOverlay,
        footerNavigation,
        transitionComponent
    }
}
</script>