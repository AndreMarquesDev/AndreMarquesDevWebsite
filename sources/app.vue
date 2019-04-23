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

            const translateBackground = event => {
                const background = this.$el.querySelector('.triangleBackground'),
                    mouseX = event.clientX / (window.innerWidth / 5),
                    mouseY = event.clientY / (window.innerHeight / 5);

                background.style.transform = `translate(-${mouseX}%, -${mouseY}%)`;
            };

            // debounce
            let timeout;

            const runLater = () => {
                timeout = null;
                translateBackground(event);
            };

            clearTimeout(timeout);
            timeout = setTimeout(runLater, 10);
        }
    },
    updated() {
        this.$store.commit('toggleMenu', {isPageLoad: true});
    }
}
</script>