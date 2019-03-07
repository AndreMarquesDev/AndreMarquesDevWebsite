<template>
    <main>
        <navigation name="Navigation"/>
        <main-content url="secondPage" name="This is the first page" destination="the second page"/>
        <footerNav name="Footer"/>
    </main>
</template>

<script>
import navigation from './../components/navigation.vue';
import mainContent from './../components/mainContent.vue';
import footerNav from './../components/footerNav.vue';

export default {
    name: 'home',
    components: {
        navigation,
        mainContent,
        footerNav
    }
}
</script>