import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);

import router from './router.js';
import ComptApp from '../component/App.vue';

new Vue({
    el:'#app',
    render:c=>c(ComptApp),
    // render:function(c){
    //     return c(ComptApp)
    // },
    router
})
