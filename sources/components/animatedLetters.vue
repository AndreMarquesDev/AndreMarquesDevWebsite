<template>
    <p>
        <span v-for="letter in letters" @mouseover="addAnimation" @animationend="removeAnimation" @webkitAnimationEnd="removeAnimation">{{ letter }}</span>
    </p>
</template>

<script>
export default {
    name: 'animatedLetters',
    props: {
        text: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            letters: [...this.text]
        }
    },
    methods: {
        addAnimation(event) {
            event.target.classList.add('rubberAnimation');
        },
        removeAnimation(event) {
            event.target.classList.remove('rubberAnimation');
        }
    },
    mounted() {
        // Remove whitespaces
        this.letters.forEach((letter, index) => {
            if (letter === ' ') {
                this.letters[index - 1] += ' ';
                this.letters.splice(index, 1);
            }
        });

        // Add a margin to emulate whitespace
        setTimeout(() => this.$el.querySelectorAll('span').forEach(letter => letter.innerHTML.length > 1 && letter.classList.add('whitespace')), 1);
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

p {
    width: 100%;
    display: block;
    color: $white;
    font-size: 40px;
    text-align: center;

    span {
        display: inline-block;

        &.whitespace {
            margin-right: .6em;
        }

    }

}

</style>