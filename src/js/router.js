//因为我们使用webpack打包，最终每个文件都是一个模块，都被放置到一个沙箱函数中执行
//没有所谓的全局变量，使用什么东西都需要单独导入
import VueRouter from 'vue-router';

import temCom from '../component/template.vue';

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:temCom}
        // {path:'/news',component:{template:'<p>新闻页面</p>'}}
    ]
})