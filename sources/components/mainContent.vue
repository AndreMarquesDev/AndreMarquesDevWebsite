<template>
    <section class="content">
        <div class="wrapper">

            <animatedLetters text="Hover me. Cool animation right? :)"/>
            <router-link :to="url">Link to {{ destination }}</router-link>

        </div>
    </section>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'mainContent',
    props: {
        url: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        }
    },
    components: {
        animatedLetters
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.content {
    width: 100%;
    height: 1500px;
    display: flex;
    align-items: center;
    position: relative;
    text-align: center;
}

</style>