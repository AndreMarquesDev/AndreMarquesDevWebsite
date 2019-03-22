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
    overflow: hidden;
    z-index: 1;

    .leftBar, .rightBar {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;

        &:before {
            content: '';
            width: 100%;
            height: 2px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: $white;
        }

    }

    .leftBar {
        left: 0;
        background: $black;
        transform: translateX(-100%);

        &:before {
            right: 0;
        }

    }

    .rightBar {
        right: 0;
        background: $black;
        transform: translateX(100%);

        &:before {
            left: 0;
        }

    }

}

</style>