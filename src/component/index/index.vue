<template>
    <article>
        <v-swipe></v-swipe>
        <v-nav></v-nav>
    </article>
</template>

<script>
    import Cnav from './nav.vue';
    import Cswipe from './swipe.vue';
    export default {
        components:{
            'v-swipe':Cswipe,
            'v-nav':Cnav
        }
    }
</script>

<style lang="less">

</style>
