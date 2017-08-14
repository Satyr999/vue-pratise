<template>
    <section class="title mint-header">
            <div class="mint-header-button is-left">
                <button @click="goBack" class="mint-button mint-button--default mint-button--normal">
                    <!----><span class="mint-button-icon"><i class="mintui mintui-back"></i></span> 
                    <label class="mint-button-text">返回</label>
                </button>
            </div> 
            <h1 class="mint-header-title">{{title}}</h1> 
            <div class="mint-header-button is-right"></div>
    </section>
</template>

<script>
    export default {
        props:['title'],
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    section.title {
        background:#eee;
        color:#000;
        border-bottom: 1px solid #999;
    }
</style>
