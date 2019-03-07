<template>
    <main>
        <navigation name="Navigation"/>
        <main-content url="home" name="This is the second page" destination="the first page"/>
        <footerNav name="Footer"/>
    </main>
</template>

<script>
import navigation from './../components/navigation.vue';
import mainContent from './../components/mainContent.vue';
import footerNav from './../components/footerNav.vue';

export default {
    name: 'secondPage',
    components: {
        navigation,
        mainContent,
        footerNav
    }
}
</script>