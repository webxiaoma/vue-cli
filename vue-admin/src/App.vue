<template>
  <div class="app">
     <router-view></router-view>
  </div>
</template>

<script>
import {Header,Footer} from '@/components';

export default {
  name: 'App',
  data(){
    return {
      isDrawerNav:true,
    }
  },
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "./theme/base.less";
.app{
  width:100%;
  height:100%;
  min-height:100vh;
}
</style>
