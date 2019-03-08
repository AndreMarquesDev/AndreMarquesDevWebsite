<template>
    <section class="content">
        <div class="wrapper">

            <h1>{{ name }}</h1>
            <router-link :to="url">Link to {{ destination }}</router-link>

        </div>
    </section>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.content {
    width: 100%;
    height: 1200px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: center;
    background: $grey;
    display: flex;
    align-items: center;

    h1 {
        width: 100%;
        display: block;
        color: white;
        font-size: 40px;
        text-align: center;
    }

}

</style>