import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { api } from "@/api"
import { request } from "@/utils"

Vue.prototype.request = request; // 接口请求
Vue.prototype.api = api; // 接口api
  
Vue.config.productionTip = false


new Vue({
    el:"#app",
    router,
    // store,
    render: h => h(App)
})