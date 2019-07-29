import Vue from 'vue'
import Router from 'vue-router'
import {Layout} from '../views'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "登录页面",
      component: () => import("../views/user/Login.vue")
    },
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect: "/",
      children: [
        {
          // 首页模块
          path: "/",
          name: "首页", // 首页
          component: () => import("../views/home/Home.vue")
        }
      ]
    }
  ]
});


router.beforeEach((to,from,next)=>{
   next()
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0); // 路由变化时，滚动到顶部
    if(to.name){
      document.title = `标题处理`
    }
   
})

export default router
