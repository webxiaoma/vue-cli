<template>
  <div class="app">
     <router-view></router-view>
  </div>
</template>

<script>
import {Header,Footer} from '@/components';

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less">
@import "./theme/base.less";
.app{}

</style>
