<template>
    <div id="app" @mousemove="shapesAnimation">
        <transition name="curtainTransition" mode="out-in">
            <router-view/>
        </transition>

    </div>
</template>

<script>

export default {
    name: 'app',
    methods: {
        shapesAnimation(event) {
            if (window.innerWidth < 768) return;

            const background = this.$el.querySelector('.shapesBackground'),
                mouseX = event.clientX / (window.innerWidth / 5),
                mouseY = event.clientY / (window.innerHeight / 5);

            background.style.transform = `translate(-${mouseX}%, -${mouseY}%)`;
        }
    },
    updated() {
        this.$store.commit('toggleMenu', {isPageLoad: true});
    }
}
</script>