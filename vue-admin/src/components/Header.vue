<template>
    <div class="header">
        <el-row>
            <el-col :span="4">
                <div class="navBtn"  v-show="!searchInputShow">
                    <p  @click="controlNav" v-if="screen !== 'xs'">
                         <i :class="!isAsideNav?'el-icon-s-unfold':'el-icon-s-fold'"></i>
                    </p>
                    <p  @click="controlDrawerNav" v-if="screen === 'xs'">
                         <i :class="!isDrawerNav?'el-icon-s-unfold':'el-icon-s-fold'"></i>
                    </p>
                </div>
            </el-col>
            <el-col :span="8">
                <div  v-show="!searchInputShow">
                   消息通知
                </div>
            </el-col>
            <el-col :span="12">
                <div class="list">
                    <div class="searchWrap">
                       <Search v-on:showSearch="showSearch"></Search>
                   </div>
                    <div class="item">
                       <Message></Message>
                   </div> 
                   <div class="item">
                       <PCenter></PCenter>
                   </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import PCenter from './PCenter';
import Message from './Message';
import Search from './Search';
export default {
    data(){
        return {
           searchInputShow:false,
        }
    },
    computed: {
       ...mapState(['isAsideNav',"isDrawerNav","screen"])
    },
    methods:{
        ...mapActions(['navChange',"drawerChange"]),
        controlNav(){ // 控制导航
            this.navChange(!this.isAsideNav)
        },
        controlDrawerNav(){ //移动端控制导航面板
            var status = this.isDrawerNav?false:true;
            this.drawerChange(status)
        },
        exitLogin(){ // 退出登录
           this.$router.push('/login')
        },
        showSearch(bol){ // 搜索框变化显示出现
           if(this.screen === 'xs'){
              this.searchInputShow = bol;
           }
        }
    },
    components:{
        PCenter,
        Message,
        Search
    }
    
}
</script>

<style lang="less" scoped>
.header{
    width:100%;
    height:60px;
    padding:0 10px;
    box-shadow: 3px 1px 2px 2px #eee;
    background: #fff;
    .el-row{
        width:100%;
        height:60px;
        .el-col{
           height:60px;
        }
    }
    .navBtn{
        height:100%;
        display:flex;
        align-items:center;
        p{
            height:100%;
            padding:0 10px;
            display: flex;
            justify-content: center;
            align-items:center;
            cursor: pointer;
            i{
                font-size:28px;
            }
        }
    }
    .list{
        height:100%;
        display: flex;
        justify-content: flex-end;
        .item{
            cursor: pointer;
            height:100%;
            display: inline-block;
            padding:0 10px;
            &:hover{
              background:rgb(248, 252, 255);
            }
        }
        .searchWrap{

        }
    }
}
</style>