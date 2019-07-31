<template>
   <div class='pCenter'>
      <el-popover
        placement="bottom"
        width="200"
        popper-class="header-popper-center"
        trigger="hover">
            <div class="centerList">
                <div class="item">
                    个人中心
                </div>
                <div class="item">
                    个人设置
                </div>
                <el-divider></el-divider>
                <div class="item">
                    退出登录
                </div>
            </div>
            <div slot="reference" class="personal">
                <span class="userPhoto">
                  <img src="@/assets/img/logo.jpg" alt="">
                </span>
                <span class="userName hidden-sm-and-down">
                  webxiaoma
                </span>
            </div>
        </el-popover>
   </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  data () {
    return {
        aaa:1
    };
  },
  computed: {
      ...mapState(["screen"])
  },
  created(){

  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.pCenter{
    height:100%;
    .personal{
        height:100%;
        display: flex;
        align-items: center;
        .userPhoto{
          display:inline-block;
          width:34px; 
          height:34px;
          margin-right:5px;
          border:1px solid #eee;
          border-radius:50%;
          padding:4px;
          img{
            width:100%;
            border-radius:50%;
          }
        }
        .userName{

        }
    }
    
}
</style>

<style lang="less">
@import "~@/theme/base-theme.less";
.header-popper-center{
  padding:8px 0;
  .centerList{
      width:100%;
    .item{
      cursor: pointer;
      width:100%;
      padding:8px 10px;
      transition:0.4s;
      &:hover{
        background:rgb(213, 236, 253);
      }
    }
    .el-divider--horizontal{
      margin:4px 0;
    }
  }
}

// 手机端样式 小于768
@media (max-width: @screen-xs) {
  .header-popper-center{
     width:97% !important;
  }
}
</style>
