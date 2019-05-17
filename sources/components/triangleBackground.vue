<template>
    <figure class="triangleBackground"></figure>
</template>

<script>
export default {
    name: 'triangleBackground'
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.triangleBackground {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/images/background-triangles.png');
    background-repeat: no-repeat;
    background-position-y: bottom;
    background-size: contain;
    opacity: .6;
}
</style>