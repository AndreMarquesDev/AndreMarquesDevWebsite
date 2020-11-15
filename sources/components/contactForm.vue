<template>
    <section class="contactForm mainSection">
        <div class="wrapper">
            <animatedLetters text="<contact me/>" :shouldAnimate="true" />

            <formComponent />
        </div>
    </section>
</template>

<script>
import animatedLetters from "./../components/animatedLetters.vue";
import formComponent from "./../components/formComponent.vue";

export default {
    name: "contactForm",
    components: {
        animatedLetters,
        formComponent,
    },
};
</script>

<style lang='scss'>
@import "../styles/variables.scss";

.contactForm {
    .animatedLetters {
        @include fontXXL;
        font-weight: $fontBold;
        margin-bottom: 100px;
    }
}
</style>