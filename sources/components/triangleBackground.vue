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
    background: url('../images/background-triangles.png') no-repeat center bottom/contain;
    opacity: .6;
}
</style>