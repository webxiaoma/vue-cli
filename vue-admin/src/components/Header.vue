<template>
    <div class="header">
        <el-row>
            <el-col :span="10">
                <div class="navBtn">
                    <!-- <p  @click="controlNav">
                         <i :class="!isAsideNav?'iconfont icon-shouqi':'iconfont icon-zhankai'"></i>
                    </p> -->
                    <p  @click="controlNav">
                         <i :class="!isAsideNav?'iconfont icon-shouqi':'iconfont icon-zhankai'"></i>
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
        
        }
    },
    computed: {
       ...mapState(['isAsideNav'])
    },
    methods:{
        ...mapActions(['navChange']),
        controlNav(){ // 控制导航
            this.navChange(!this.isAsideNav)
        },
        exitLogin(){
                this.$router.push('/login')
        }
  }
    
}
</script>

<style lang="less" scoped>
.header{
    width:100%;
    height:60px;
    box-shadow: 3px 1px 5px 2px #eee;
    .el-row{
        width:100%;
        height:64px;
        .el-col{
           height:64px;
        }
    }
    .navBtn{
        height:100%;
        display:flex;
        align-items:center;
        p{
            height:100%;
            padding:0 20px;
            display: flex;
            justify-content: center;
            align-items:center;
            cursor: pointer;
            i{
                font-size:20px;
            }
        }

    }
}
</style>