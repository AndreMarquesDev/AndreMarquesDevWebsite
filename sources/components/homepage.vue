<template>
    <section class="content">
        <div class="wrapper">

            <h1>Hi, my name is André Marques and I'm a Frontend Developer</h1>
            <p>Get to know me <router-link to="about" aria-label="Link to about page"><animatedLetters text="<about/>"/></router-link></p>
            <p>Check out my <router-link to="work" aria-label="Link to work page"><animatedLetters text="<projects/>"/></router-link></p>
            <p>Get in touch <router-link to="contact" aria-label="Link to contact page"><animatedLetters text="<contact/>"/></router-link></p>

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
    width: 100%;
    display: flex;
    position: relative;
    padding: calc(#{$navHeight + 100}) 0 calc(#{$footerHeight + 40});

    h1 {
        width: 60%;
        @include fontXXL;
        margin-bottom: 40px;
    }

    p {
        width: 60%;
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