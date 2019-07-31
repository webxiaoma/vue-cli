import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { apis } from "@/api"; 
import { request } from '@/utils';

import './assets/fonts/iconfont.css'  // 引入icon 图标

/**
* elementUl  https://element.eleme.cn/2.0/#/zh-CN/component/installation
*/
// import "element-ui/lib/theme-chalk/index.css";
import {
  Container,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  Dropdown, 
  DropdownMenu,
  DropdownItem,
  Button,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Checkbox,
  Tooltip,
  MenuItemGroup,
  Drawer
} from "element-ui";

Vue.use(Container);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Tooltip);
Vue.use(MenuItemGroup);
Vue.use(Drawer);



Vue.prototype.api = apis;  // 接口api
Vue.prototype.request = request; // 接口请求 
Vue.config.productionTip = false

new Vue({
    el:"#app",
    router,
    store,
    render: h => h(App)
})
