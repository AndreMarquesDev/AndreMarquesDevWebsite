<template>
    <section class="navigation">
        <div class="wrapper">

            <h1>{{ name }}</h1>

        </div>
    </section>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.navigation {
    background: $primaryGradient;

    h1 {
        width: 100%;
        color: white;
        font-size: 40px;
        text-align: center;
        padding: 80px 0;
    }

}

</style>