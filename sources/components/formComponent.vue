<template>
    <div class="formComponent scrollReveal">
        <form method="POST" @submit="handleSubmit($event)" novalidate>
            <animatedLetters text="<!-- Get in touch -->" :shouldAnimate="true" />
            <input type="text" name="name" required placeholder="Name" tabindex="0" aria-label="Your name"
                @blur="checkInput($event)" @keyup="checkInput($event)" v-model="name" />
            <span class="errorText">Please enter your first and last name</span>
            <input type="email" name="emailAddress" required placeholder="Email" tabindex="0"
                aria-label="Your email address" @blur="checkInput($event)" @keyup="checkInput($event)"
                v-model="email" />
            <span class="errorText">Please enter a valid email address</span>
            <input type="text" name="company" placeholder="Company (optional)" tabindex="0" aria-label="Company"
                @blur="checkInput($event)" @keyup="checkInput($event)" v-model="company" />
            <textarea name="message" required placeholder="Message" tabindex="0" aria-label="Your message"
                @blur="checkInput($event)" @keyup="checkInput($event)" v-model="message"></textarea>
            <span class="errorText">Please enter a message</span>

            <button type="submit" class="button" :disabled="this.isSubmitButtonDisabled">
                <animatedLetters text="<send/>" :shouldAnimate="!this.isSubmitButtonDisabled" />
            </button>
        </form>

        <p class="formNotification" data-success="Thank you! I will reply as soon as I can :)"
            data-error="Oops! There was an error. Please try again later."></p>
    </div>
</template>

<script>
import axios from "axios";
import animatedLetters from "./../components/animatedLetters.vue";

export default {
    name: "formComponent",
    components: {
        animatedLetters,
    },
    data() {
        return {
            formValidated: false,
            name: "",
            email: "",
            company: "",
            message: "",
            isSubmitButtonDisabled: false,
        };
    },
    methods: {
        checkInput(event) {
            const input = event.target,
                nameRegex = /s*([a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]{1,}([\.,] |[-']| ))+[a-zA-ZáâàãéêèíîìóôòõúûùñçäöüßÁÂÀÃÉÊÈÍÎÌÓÔÒÕÚÛÙÑÇÄÖÜẞ]+\.?\s*$/,
                emailRegex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            // Name input
            if (input.type === "text" && input.required === true) {
                nameRegex.test(input.value)
                    ? (input.classList.remove("error"),
                        (this.formValidated = true))
                    : (input.classList.add("error"),
                        (this.formValidated = false));
            }

            // Email input
            if (input.type === "email") {
                emailRegex.test(input.value)
                    ? (input.classList.remove("error"),
                        (this.formValidated = true))
                    : (input.classList.add("error"),
                        (this.formValidated = false));
            }

            // Textarea
            if (input.tagName === "TEXTAREA") {
                input.value.length
                    ? (input.classList.remove("error"),
                        (this.formValidated = true))
                    : (input.classList.add("error"),
                        (this.formValidated = false));
            }
        },
        showNotification(notificationType) {
            const formNotification = this.$el.querySelector(
                ".formNotification"
            );

            formNotification.classList.remove("error");
            formNotification.classList.add(notificationType);

            if (notificationType === "success") {
                formNotification.innerHTML = formNotification.dataset.success;
            } else {
                formNotification.innerHTML = formNotification.dataset.error;
            }
        },
        hideNotification(notificationType) {
            const formNotification = this.$el.querySelector(
                ".formNotification"
            );
            const wasSubmittedSuccessfully = notificationType === "success";

            setTimeout(() => {
                this.resetForm(wasSubmittedSuccessfully);
                formNotification.classList.remove(notificationType);
            }, 5000);
        },
        resetForm(wasSuccessful) {
            this.isSubmitButtonDisabled = false;

            if (!wasSuccessful) {
                return;
            }

            const form = this.$el.querySelector("form");

            form.reset();
            this.formValidated = false;
            this.name = "";
            this.email = "";
            this.company = "";
            this.message = "";
        },
        handleSubmit(event) {
            event.preventDefault();

            const form = this.$el.querySelector("form");
            const inputs = form.querySelectorAll("input, textarea");

            inputs.forEach((input) => {
                if (
                    input.required === true &&
                    (!input.value.length || input.classList.contains("error"))
                ) {
                    input.classList.add("error");
                    this.formValidated = false;
                }
            });

            if (this.formValidated) {
                this.isSubmitButtonDisabled = true;

                const formData = {
                    name: this.name,
                    email: this.email,
                    company: this.company,
                    message: this.message,
                };

                axios
                    .post(
                        '/.netlify/functions/submitContactForm',
                        formData
                    )
                    .then(() => {
                        this.showNotification("success");
                        this.hideNotification("success");
                    })
                    .catch(() => {
                        this.showNotification("error");
                        this.hideNotification("error");
                    });
            }
        },
    },
};
</script>

<style lang='scss'>
@import "../styles/variables.scss";

.formComponent {
    >button {
        @include fontXL;
    }

    form {
        max-width: 700px;
        display: flex;
        flex-direction: column;
        position: relative;
        margin: auto;
        padding: 30px;

        .animatedLetters {
            @include fontM;
            margin-bottom: 0;
            position: relative;
        }

        input,
        textarea {
            @include fontM($darkGrey);
            background: $lightGrey;
            border: 2px solid transparent;
            margin-top: 20px;
            padding: 5px 0 5px 10px;
            cursor: text;

            &.error {
                border: 2px solid $red;

                +.errorText {
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
            @include fontM($darkGrey);
            font-style: italic;
        }

        ::-moz-placeholder {
            @include fontM($darkGrey);
            font-style: italic;
        }

        :-moz-placeholder {
            @include fontM($darkGrey);
            font-style: italic;
        }

        :-ms-input-placeholder {
            @include fontM($darkGrey);
            font-style: italic;
        }

        :focus::-webkit-input-placeholder {
            opacity: 0;
            @include transition(opacity, 0.3s, ease);
        }

        .errorText {
            opacity: 0;
            pointer-events: none;
            @include fontM($red);
        }

        @keyframes loading {
            100% {
                transform: translateX(100%);
            }
        }

        button {
            position: relative;
            display: block;
            background: $blue;
            margin: 20px 0 auto auto;
            padding: 5px 25px;
            cursor: pointer;
            overflow: hidden;

            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }

            &[disabled] {
                cursor: not-allowed;
                background: $submitButtonDisabled;

                &:before {
                    transform: translateX(-100%);
                    background: linear-gradient(90deg,
                            transparent,
                            $submitButtonDisabledLoading,
                            transparent);
                    animation: loading 1s infinite;
                }
            }

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
        @include transition(transform, 0.25s);
        z-index: 1;

        &.success {
            background: #28ca80;
            transform: translateY(0);
        }

        &.error {
            background: $red;
            transform: translateY(0);
        }
    }
}
</style>