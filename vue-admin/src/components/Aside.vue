<template>
   <div class='aside'  :style="isAsideNav?{width:'64px'}:''">
        <div class="logo"  v-if="screen !== 'xs'">
            <el-row>
                <el-col>
                  <div class="logoDiv">
                    <a href="/">
                      <p class="logoCenter">
                          <img src="@/assets/img/logo.jpg" />
                          <transition name="fade">
                            <span class="hidden-sm-and-down" v-show="!isAsideNav">后台管理</span>
                          </transition>
                      </p>
                    </a>
                  </div>
                </el-col>
            </el-row>
        </div>
        <div class="nav">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#001529"
                text-color="#eee"
                :collapse="isAsideNav"
                active-text-color="#fff">
                <el-submenu index="1">
                  <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
   </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  data () {
    return {

    };
  },
  computed: {
     ...mapState(['isAsideNav',"isDrawerNav","screen"]),
  },
  created(){

  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.aside{
  height:100%;
  width:250px;
  background:#001529;
  transition:all .3s linear;
  .logo{
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#151e27;
    .logoDiv{
          width:100%;
          height:100%;
          .logoCenter{
              height:100%;
              display: flex;
              justify-content: center;
              align-items:center;
              color:rgba(255,255,255,0.95);
              font-size:24px;
              img{
                width:32px;
                height:32px;
                vertical-align:middle;
              }
              span{
                 margin-left:10px;
              }
              .fade-enter-active{
                transition: opacity .5s .2s linear;
              }
              .fade-enter, .fade-leave-to  {
                opacity: 0;
              }
          }
    }
  }
  .nav{
    .el-menu{
      border-right:none;
    }
  }
}

</style>