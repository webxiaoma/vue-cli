import Vue from "vue";
import router from "./router";
import App from './App'

export default new Vue({
    el: '#root',
    router,
    render: h => h(App)
});