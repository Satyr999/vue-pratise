//因为我们使用webpack打包，最终每个文件都是一个模块，都被放置到一个沙箱函数中执行
//没有所谓的全局变量，使用什么东西都需要单独导入
import VueRouter from 'vue-router';

import Cindex from '../component/index/index.vue';
import Cnews from '../component/news/list.vue';
import Cdetail from '../component/news/detail.vue';

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:Cindex},
        {path:'/news/list',component:Cnews},
        {path:'/news/details/:id',component:Cdetail}
    ]
})