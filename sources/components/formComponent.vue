<template>
    <div class="formComponent">
        <button @click="teste">isto é um botão</button>

        <form class="teste" action="https://docs.google.com/forms/d/e/1FAIpQLSeflKZw6gkJ2uxaIlOE_XdDVYHU3KsmJPNzR7RcQrPAKsB-eg/formResponse" target="hiddenIframe" method="POST" id="mG61Hd" @submit="formHandler">
            <animatedLetters text="<!-- Get in touch -->"/>

            <input type="text" name="name" required placeholder="Name" tabindex="0" aria-label="Your name">
            <input type="email" name="email" required placeholder="Email" tabindex="0" aria-label="Your email address">
            <input type="text" name="company" placeholder="Company (optional)" tabindex="0" aria-label="Company">
            <textarea name="message" required placeholder="Message" tabindex="0" aria-label="Your message"></textarea>

            <button type="submit" class="button">
                <animatedLetters text="<send/>"/>
            </button>
        </form>

        <p class="formNotification" data-success="Thank you! I will answer as soon as possible :)"></p>

        <iframe name="hiddenIframe" id="hiddenIframe" title="Hidden iframe"></iframe>

    </div>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'formComponent',
    components: {
        animatedLetters
    },
    methods: {
        formHandler() {

            let formSubmitted = false,
            form = document.querySelector('form'),
            iframe = document.querySelector('iframe'),
            formNotification = document.querySelector('.formNotification');


            form.addEventListener('submit', () => formSubmitted = true);
            iframe.addEventListener('load', () => {
                if (formSubmitted) {
                    formNotification.classList.add('success');
                    formNotification.innerHTML = formNotification.dataset.success;
                    setTimeout(() => {
                        form.reset();
                        formNotification.classList.remove('success');
                    }, 5000);
                }
            });

        },
        teste() {
            this.slideUp(document.querySelector('form'))
        },
        slideUp(element, duration = 500, easing) {
            return new Promise(resolve => {

                element.style.height = element.offsetHeight + 'px';
                element.style.transitionProperty = `height, margin, padding`;
                element.style.transitionDuration = duration + 'ms';
                element.style.transitionTimingFunction = easing;
                element.offsetHeight;
                element.style.overflow = 'hidden';
                element.style.height = 0;
                element.style.paddingTop = 0;
                element.style.paddingBottom = 0;
                element.style.marginTop = 0;
                element.style.marginBottom = 0;

                setTimeout(() => {
                    element.style.display = 'none';
                    element.style.removeProperty('height');
                    element.style.removeProperty('padding-top');
                    element.style.removeProperty('padding-bottom');
                    element.style.removeProperty('margin-top');
                    element.style.removeProperty('margin-bottom');
                    element.style.removeProperty('overflow');
                    element.style.removeProperty('transition-duration');
                    element.style.removeProperty('transition-property');
                    element.style.removeProperty('transition-timing-function');
                    resolve(false);
                }, duration);

            });
        }
    }
}

</script>

<style lang='scss'>
@import '../styles/variables.scss';

.formComponent {

    > button {
        @include fontXL;
    }

    form {
        max-width: 700px;
        display: flex;
        flex-direction: column;
        background: url('../images/background.webp') no-repeat center/cover;
        margin: auto;
        padding: 30px;
        @include transition (all, 2s, ease);

        &.success {
            height: 0;
            overflow: hidden;

            > * {
                height: 0;
                opacity: 0;
                @include transition (all, 2s, ease);
            }
        }

        .animatedLetters {
            @include fontM;
            margin-bottom: 20px;
        }

        input, textarea {
            @include fontM ($darkGrey);
            background: $lightGrey;
            margin-bottom: 20px;
            padding: 5px 0 5px 10px;
        }

        textarea {
            height: 200px;
        }

        // Placeholders
        ::-webkit-input-placeholder {
            @include fontM ($darkGrey);
            font-style: italic;
        }
        ::-moz-placeholder {
            @include fontM ($darkGrey);
            font-style: italic;
        }
        :-moz-placeholder {
            @include fontM ($darkGrey);
            font-style: italic;
        }
        :-ms-input-placeholder {
            @include fontM ($darkGrey);
            font-style: italic;
        }

        :focus::-webkit-input-placeholder {
            opacity: 0;
            @include transition (opacity, .3s, ease);
        }

        button {
            display: block;
            background: $blue;
            margin: auto 0 auto auto;
            padding: 5px 25px;

            .animatedLetters {
                font-weight: $fontBold;
                margin-bottom: 0;
            }

        }

    }

    iframe {
        display: none;
    }

    .formNotification {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        transform: translateY(100%);
        color: $white;
        text-align: center;
        padding: 30px;
        @include transition ($duration: .5s);
        z-index: 1;

        &.success {
            background: green;
            transform: translateY(0);
        }

    }
}
</style>