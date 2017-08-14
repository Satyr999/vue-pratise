<template>
  <section class="news_details">
    <v-title :title="title"></v-title>
    <div class="mui-card">
				<div class="mui-card-header">{{news.title}}</div>
				<div class="mui-card-footer">
           <span>创建时间：{{news.add_time|formatDate('yyyy-mm-dd')}}</span><span>浏览量：{{news.click}}</span>
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-html="news.content">
					</div>
				</div>
			</div>
  </section>
</template>

<script>
    import Ctitle from '../common/title.vue';
    import config from '../../js/config.js';
    export default {
      data(){
        return {
          news : {},
          title: '资讯详情'
        }
      },
      methods:{
        getNews(){
          let url = config.newsDetails+this.$route.params.id;
          // console.log(url);
          this.$http.get(url).then(resp=>{
            resp.body.status==0 && (this.news=resp.body.message[0]);
          })
        }
      },
      created(){
        this.getNews();
      },
      components:{
        'v-title':Ctitle
      }
    }
</script>

<style lang="less">

</style>
