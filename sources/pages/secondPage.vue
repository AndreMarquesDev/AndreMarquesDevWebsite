<template>
    <main>
        <navigation name="Navigation"/>
        <main-content url="home" name="This is the second page" destination="the first page"/>
        <transitionComponent/>
    </main>
</template>

<script>
import navigation from './../components/navigation.vue';
import mainContent from './../components/mainContent.vue';
import transitionComponent from './../components/transitionComponent.vue';

export default {
    name: 'secondPage',
    components: {
        navigation,
        mainContent,
        transitionComponent
    }
}
</script>