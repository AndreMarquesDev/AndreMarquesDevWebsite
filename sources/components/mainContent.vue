<template>
    <section class="content">
        <div class="wrapper">

            <!-- <h1>{{ name }}</h1> -->
            <h1>
                <span v-for="letter in text" class="animatedLetters" @mouseover="addAnimation" @animationend="removeAnimation" @webkitAnimationEnd="removeAnimation">{{ letter }}</span>
            </h1>
            <router-link :to="url">Link to {{ destination }}</router-link>

        </div>
    </section>
</template>

<script>
export default {
    name: 'mainContent',
    props: {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            text: [...this.name]
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

        const coiso = this.text;

        this.text.forEach((el, index) => {
            if (el === ' ') {
                this.text[index - 1] += ' ';
                this.text.splice(index, 1)
                // var coiso1 = {...coiso};
                // console.log(coiso)
                // console.log(coiso1)
            }
        });

        // console.log(this.text)

        // setTimeout(() => {
        //     this.$el.querySelectorAll('h1 span').forEach(span => {
        //         if (span.innerHTML.length > 1) {
        //             span.style.marginRight = '25px'
        //         }
        //     })

        // }, 3000)
    }
}
</script>

<style lang='scss'>
@import '../styles/variables.scss';

.content {
    width: 100%;
    height: 1500px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    text-align: center;
    display: flex;
    align-items: center;

    h1 {
        width: 100%;
        display: block;
        color: $white;
        font-size: 40px;
        text-align: center;

        span {
            display: inline-block;
            letter-spacing: 10px;
            color: $white;
        }

    }

}

</style>