<template>
    <figure class="shapesBackground"></figure>
</template>

<script>
export default {
    name: 'shapesBackground'
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.shapesBackground {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../images/shapes.svg') no-repeat center bottom/contain;
    opacity: .6;
}

</style>