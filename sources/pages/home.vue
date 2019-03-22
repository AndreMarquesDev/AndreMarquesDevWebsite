<template>
    <main>
        <navigation/>
        <main-content url="secondPage" destination="the second page"/>
        <footerNavigation/>
        <menuOverlay/>
        <transitionComponent/>
    </main>
</template>

<script>
import navigation from './../components/navigation.vue';
import mainContent from './../components/mainContent.vue';
import menuOverlay from './../components/menuOverlay.vue';
import footerNavigation from './../components/footerNavigation.vue';
import transitionComponent from './../components/transitionComponent.vue';

export default {
    name: 'home',
    components: {
        navigation,
        mainContent,
        menuOverlay,
        footerNavigation,
        transitionComponent
    }
}
</script>