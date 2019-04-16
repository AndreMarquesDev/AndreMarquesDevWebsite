<template>
    <section class="contactForm mainSection">
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

    .animatedLetters {
        margin-bottom: 100px;
    }

}

</style>