<template>
    <p class="animatedLetters" :class="!this.shouldAnimate && 'freeze'">
        <span
            v-for="(letter, index) in letters"
            :key="letter + index"
            @mouseover="addAnimation"
            @animationend="removeAnimation"
            @webkitAnimationEnd="removeAnimation"
        >{{ letter }}</span>
    </p>
</template>

<script>
export default {
    name: "animatedLetters",
    props: {
        text: {
            type: String,
            required: true,
        },
        shouldAnimate: {
            type: Boolean,
            required: false,
        },
    },
    data() {
        return {
            letters: [...this.text],
        };
    },
    methods: {
        addAnimation({ target }) {
            if (target.parentElement.classList.contains("freeze")) {
                return;
            }

            target.classList.add("rubberAnimation");
        },
        removeAnimation({ target }) {
            target.classList.remove("rubberAnimation");
        },
    },
    mounted() {
        // Remove whitespaces
        this.letters.forEach((letter, index) => {
            if (letter === " ") {
                this.letters[index - 1] += " ";
                this.letters.splice(index, 1);
            }
        });

        // Add a margin to emulate whitespace
        setTimeout(
            () =>
                this.$el.querySelectorAll("span").forEach((letter) => {
                    // innerHTML returns this when the character is a '<' or a '>'
                    letter.innerHTML === "&lt;"
                        ? letter.innerText.length > 1 &&
                          letter.classList.add("whitespace")
                        : letter.innerHTML.length > 1 &&
                          letter.classList.add("whitespace");
                }),
            1
        );
    },
};
</script>

<style lang='scss'>
@import "../styles/variables.scss";

.animatedLetters {
    width: 100%;
    display: block;
    color: $white;
    font-size: 40px;
    text-align: left;

    span {
        display: inline-block;

        &.whitespace {
            margin-right: 0.6em;
        }
    }
}
</style>