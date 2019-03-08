<template>
    <main>
        <navigation/>
        <main-content url="secondPage" name="This is the first page" destination="the second page"/>
        <transitionComponent name="Transition"/>
    </main>
</template>

<script>
import navigation from './../components/navigation.vue';
import mainContent from './../components/mainContent.vue';
import transitionComponent from './../components/transitionComponent.vue';

export default {
    name: 'home',
    components: {
        navigation,
        mainContent,
        transitionComponent
    }
}
</script>