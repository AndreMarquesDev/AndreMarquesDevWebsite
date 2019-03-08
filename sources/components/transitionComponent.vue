<template>
    <div class="transitionComponent">
        <div class="leftBar"></div>
        <div class="rightBar"></div>
    </div>
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

.transitionComponent {
    height: 0;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;

    .leftBar, .rightBar {
        width: 50%;
        height: 0;
        position: absolute;
        @include transition (height, 1s);
    }

    .leftBar {
        top: 0;
        left: 0;
        background: $primaryGradient;
    }

    .rightBar {
        right: 0;
        bottom: 0;
        background: $invertedPrimaryGradient;
    }

}

</style>