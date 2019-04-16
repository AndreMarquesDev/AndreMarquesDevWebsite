<template>
    <div class="formComponent">

        <form action="https://docs.google.com/forms/d/e/1FAIpQLSeflKZw6gkJ2uxaIlOE_XdDVYHU3KsmJPNzR7RcQrPAKsB-eg/formResponse" target="hiddenIframe" method="POST" id="mG61Hd" @submit="formSubmitted = true" novalidate>
            <animatedLetters text="<!-- Get in touch -->"/>

            <input type="text" name="entry.1177017935" required placeholder="Name" tabindex="0" aria-label="Your name" @blur="checkInput($event)" @keyup="checkInput($event)">
            <span class="errorText">Please enter your first and last name</span>
            <input type="email" name="emailAddress" required placeholder="Email" tabindex="0" aria-label="Your email address" @blur="checkInput($event)" @keyup="checkInput($event)">
            <span class="errorText">Please enter a valid email address</span>
            <input type="text" name="entry.1964548515" placeholder="Company (optional)" tabindex="0" aria-label="Company" @blur="checkInput($event)" @keyup="checkInput($event)">
            <textarea name="entry.1185595172" required placeholder="Message" tabindex="0" aria-label="Your message" @blur="checkInput($event)" @keyup="checkInput($event)"></textarea>
            <span class="errorText">Please enter a message</span>

            <button type="submit" class="button">
                <animatedLetters text="<send/>"/>
            </button>
        </form>

        <p class="formNotification" data-success="Thank you! I will reply as soon as I can :)"></p>

        <iframe name="hiddenIframe" id="hiddenIframe" title="Hidden iframe" @load="formHandler"></iframe>

    </div>
</template>

<script>
import animatedLetters from './../components/animatedLetters.vue';

export default {
    name: 'formComponent',
    components: {
        animatedLetters
    },
    data() {
        return {
            formSubmitted: false,
            formValidated: false
        }
    },
    methods: {
        checkInput(event) {
            const input = event.target,
                nameRegex = /s*([a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]{1,}([\.,] |[-']| ))+[a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]+\.?\s*$/,
                emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // Name input
            if (input.type === 'text' && input.required === true) {
                nameRegex.test(input.value)
                    ? (input.classList.remove('error'), this.formValidated = true)
                    : (input.classList.add('error'), this.formValidated = false);
            }

            // Email input
            if (input.type === 'email') {
                emailRegex.test(input.value)
                    ? (input.classList.remove('error'), this.formValidated = true)
                    : (input.classList.add('error'), this.formValidated = false);
            }

            // Textarea
            if (input.tagName === 'TEXTAREA') {
                input.value.length
                    ? (input.classList.remove('error'), this.formValidated = true)
                    : (input.classList.add('error'), this.formValidated = false);
            }

        },

        formHandler() {
            const form = this.$el.querySelector('form'),
                inputs = form.querySelectorAll('input, textarea'),
                iframe = this.$el.querySelector('iframe'),
                formNotification = this.$el.querySelector('.formNotification');

            this.formSubmitted && inputs.forEach(input => {
                if (input.required === true && (!input.value.length || input.classList.contains('error'))) {
                    input.classList.add('error');
                    this.formValidated = false;
                }
            });

            if (this.formSubmitted && this.formValidated) {
                formNotification.classList.add('success');
                formNotification.innerHTML = formNotification.dataset.success;
                setTimeout(() => {
                    form.reset();
                    this.formSubmitted = false;
                    this.formValidated = false;
                    formNotification.classList.remove('success');
                }, 5000);
            }

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
        position: relative;
        background: url('../images/background.jpg') no-repeat center/cover;
        margin: auto;
        padding: 30px;

        .animatedLetters {
            @include fontM;
            margin-bottom: 0;
        }

        input, textarea {
            @include fontM ($darkGrey);
            background: $lightGrey;
            border: 2px solid transparent;
            margin-top: 20px;
            padding: 5px 0 5px 10px;
            cursor: text;

            &.error {
                border: 2px solid $red;

                + .errorText {
                    opacity: 1;
                    pointer-events: initial;
                }

            }
        }

        textarea {
            height: 200px;
            margin-top: 46px;
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

        .errorText {
            opacity: 0;
            pointer-events: none;
            @include fontM ($red);
        }

        button {
            display: block;
            background: $blue;
            margin: 20px 0 auto auto;
            padding: 5px 25px;
            cursor: pointer;

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
        @include fontL;
        text-align: center;
        padding: 30px;
        @include transition (transform, .5s);
        z-index: 1;

        &.success {
            background: #28ca80;
            transform: translateY(0);
        }

    }
}
</style>