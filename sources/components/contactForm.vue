<template>
    <section class="contactForm">
        <div class="wrapper">

            <animatedLetters text="<contact/>"/>

            <h1>This is the contact page</h1>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'contactForm',
    components: {
        animatedLetters
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.contactForm {
    width: 100%;
    display: flex;
    position: relative;
    padding: calc(#{$navHeight + 40}) 0 calc(#{$footerHeight + 40});

    h1 {
        @include fontXXL;
    }

}

</style>