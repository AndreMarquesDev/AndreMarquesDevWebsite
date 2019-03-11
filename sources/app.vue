<template>
    <div id="app">
        <transition name="curtainTransition" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'app',
    updated() {
        this.$store.commit('toggleMenu', true)
    }
}
</script>

<style lang='scss'>

</style>