import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import MintUI from 'mint-ui';    // MintUI是vue插件，将来需要手动use才可以使用
import 'mint-ui/lib/style.css';  // 引入样式库还需单独导入css文件
import 'mui/dist/css/mui.css'    // 引入mui样式
import 'mui/examples/hello-mui/css/icons-extra.css'; // 引入mui的扩展图标样式

//手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

import ComptApp from '../component/App.vue';   // 根组件
import router from './router.js';   // 路由
import './filter.js';

new Vue({
    el:'#app',
    render:c=>c(ComptApp),
    // render:function(c){
    //     return c(ComptApp)
    // },
    router
})
