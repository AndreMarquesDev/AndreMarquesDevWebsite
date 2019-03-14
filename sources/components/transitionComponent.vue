<template>
    <div class="transitionComponent">
        <div class="leftBar"></div>
        <div class="rightBar"></div>
        <fontAwesomeIcon icon="circle-notch" />
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

    &:before {
        content: '';
        width: 50px;
        height: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $white;
        border: 1px solid red;
        border-radius: 50%;
        z-index: 1;
    }

    .leftBar, .rightBar {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;

        &:before {
            content: '';
            width: 99%;
            height: 2px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: $orange;
        }

    }

    .leftBar {
        left: 0;
        background: $primaryGradient;
        transform: translateX(-100%);

        &:before {
            left: 0;
        }

    }

    .rightBar {
        right: 0;
        background: $invertedPrimaryGradient;
        transform: translateX(100%);

        &:before {
            right: 0;
        }

    }

    svg {
        animation: spinningLoader 1s ease-in-out 0s infinite normal;
    }

}

</style>