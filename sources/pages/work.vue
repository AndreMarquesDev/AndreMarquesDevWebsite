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

export default {
    name: 'work',
    components: {
        triangleBackground,
        navigation,
        projects,
        menuOverlay,
        footerNavigation,
        transitionComponent
    }
}
</script>