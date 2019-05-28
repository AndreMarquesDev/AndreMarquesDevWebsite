<template>
    <section class="content scrollReveal" >
        <div class="wrapper">

            <h1>Hi! My name is <animatedLetters text="André Marques"/> and I'm a Frontend Developer</h1>
            <p>Get to know more <router-link to="about" aria-label="Link to about page"><animatedLetters text="<about/>"/></router-link>me</p>
            <p>Check out my <router-link to="work" aria-label="Link to work page"><animatedLetters text="<projects/>"/></router-link></p>
            <p>Get in touch through the <router-link to="contact" aria-label="Link to contact page"><animatedLetters text="<contact/>"/></router-link>form</p>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'homepage',
    components: {
        animatedLetters
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.content {
    min-height: inherit;
    width: 100%;
    position: relative;
    text-align: center;
    padding: $navHeight 0 calc(#{$footerHeight + 40});

    .wrapper {
        min-height: calc(100vh - (#{$navHeight} + #{$footerHeight + 40}));
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        max-width: 800px;
        width: 100%;
        @include fontXXL;
        margin-bottom: 100px;

        p {
            @include fontXXL;
        }
    }

    p {
        max-width: 800px;
        width: 100%;
        @include fontXL;
    }

    .animatedLetters {
        width: auto;
        display: inline-block;
        color: $blue;
    }

    @include tablet {
        h1, p:not(.animatedLetters) {
            width: 100%;
        }
    }

}

</style>