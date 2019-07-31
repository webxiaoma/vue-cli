import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  namespaced: true,
  state: {
    isAsideNav: false, // 窗口尺寸变化时
    screen:'', // xs  md  lg设备类型
    isDrawerNav:false, // 移动端对侧边栏的控制
    isLoginPage: true // 是否是登录页面
  },
  modules: {
  },
  actions: {
    navChange({ commit }, val) {
      commit("NAV_CHANGE", val);
    },
    drawerChange({ commit }, val){ // 导航drawer变化
      commit("DRAWER_CHANGE", val);
    },
    screenChange({ commit }, val){ // 屏幕类型
      commit("SCREEN_CHANGE", val);
    }
  },
  mutations: {
    NAV_CHANGE(state, val) {
      // 控制导航栏变化
      state.isAsideNav = val;
    },
    IS_LOGIN_PAGE(state, val) {
      state.isLoginPage = val.status;
    },
    DRAWER_CHANGE(state, val){ // 导航drawer变化
      state.isDrawerNav = val;
    },
    SCREEN_CHANGE(state, val){ // 屏幕类型
       state.screen = val;
    }
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
});
