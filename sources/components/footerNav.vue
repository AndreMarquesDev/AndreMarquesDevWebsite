<template>
    <footer>
        <div class="wrapper">

            <h1>{{ name }}</h1>

        </div>
    </footer>
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

footer {
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