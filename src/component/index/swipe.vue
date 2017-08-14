<template>
    <section id="swipe">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,i) in list" :key="i">
                <a :href="item.url">
                    <img :src="item.img"/>
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
    import config from '../../js/config.js';
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            getLunbo(){
                let url = config.lunbo;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.list = resp.body.message;
                    }
                })
            }
        },
        created(){
            this.getLunbo();
        }
    }
</script>

<style lang="less">
    #swipe{
        height:200px;
        img{
            width: 100%;
        }
    }
</style>
