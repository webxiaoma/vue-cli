import Vue from 'vue'
import Router from 'vue-router'
import {Layout} from '../views'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/',
      children: [{ // 首页模块
            path: '/',
            name: '首页', // 首页
            component: resolve => require(['../views/home/Home.vue'], resolve),
        }
      ]
    }
  ]
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0); // 路由变化时，滚动到顶部
    if(to.name){
      document.title = `标题处理`
    }
   
})

export default router
