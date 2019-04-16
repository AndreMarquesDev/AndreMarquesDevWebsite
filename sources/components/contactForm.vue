<template>
    <section class="contactForm">
        <div class="wrapper">

            <animatedLetters text="<contact me/>"/>

            <formComponent/>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';
import formComponent from './../components/formComponent.vue';

export default {
    name: 'contactForm',
    components: {
        animatedLetters,
        formComponent
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

    .animatedLetters {
        margin-bottom: 100px;
    }

}

</style>