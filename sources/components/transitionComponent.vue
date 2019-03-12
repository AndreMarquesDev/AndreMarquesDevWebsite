<template>
    <div class="transitionComponent">
        <div class="leftBar"></div>
        <div class="rightBar"></div>
    </div>
</template>

<style lang='scss'>
@import '../styles/variables.scss';

.transitionComponent {
    width: 100%;
    height: 0;
    position: fixed;
    top: 0;
    z-index: 1;

    .leftBar, .rightBar {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    .leftBar {
        left: 0;
        background: $primaryGradient;
        transform: translateX(-100%);
    }

    .rightBar {
        right: 0;
        background: $invertedPrimaryGradient;
        transform: translateX(100%);
    }

}

</style>