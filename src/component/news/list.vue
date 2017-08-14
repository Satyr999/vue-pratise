<template>
    <section>
        <v-title :title="title"></v-title>
        <ul class="mui-table-view">
				<li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media">
					<router-link :to="'/news/details/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="mui-ellipsis">{{item.title}}</p>
                            <div class="list_item">
                                <p>创建时间：{{item.add_time|formatDate('yyyy-mm-dd')}}</p>                            
                                <p class=" mui-pull-right">点击量：{{item.click}}</p>                            
                            </div>
						</div>
					</router-link>
				</li>
			</ul>
    </section>
</template>

<script>
    import Ctitle from '../common/title.vue';
    import config from '../../js/config.js';
    export default {
        data(){
            return {
                list:[],
                title:'图文资讯'
            }
        },
        methods:{
            getNewList(){
                let url = config.newslist;
                this.$http.get(url).then(resp=>{
                    if(resp.body.status==0){
                        this.list = resp.body.message;
                    }
                })
            }
        },
        created(){
            this.getNewList();
        },
        components:{
            'v-title':Ctitle
        }
    }
</script>

<style lang="less">
    .list{
       &_item p{
         display: inline-block;
       }
    }
</style>
