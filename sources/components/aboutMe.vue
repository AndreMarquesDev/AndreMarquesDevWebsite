<template>
    <section class="aboutMe">
        <div class="wrapper">

            <animatedLetters text="<about/>"/>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'aboutMe',
    components: {
        animatedLetters
    },
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.aboutMe {
    width: 100%;
    display: flex;
    position: relative;
    padding: calc(#{$navHeight + 40}) 0 calc(#{$footerHeight + 40});

    .animatedLetters {
        @include fontXXL;
        font-weight: $fontBold;
        text-align: left;
        margin-bottom: 40px;
    }

}

</style>