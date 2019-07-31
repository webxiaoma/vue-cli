<template>
    <div class="header">
        <el-row>
            <el-col :span="4">
                <div class="navBtn">
                    <p  @click="controlNav" v-if="screen !== 'xs'">
                         <i :class="!isAsideNav?'el-icon-s-unfold':'el-icon-s-fold'"></i>
                    </p>
                    <p  @click="controlDrawerNav" v-if="screen === 'xs'">
                         <i :class="!isDrawerNav?'el-icon-s-unfold':'el-icon-s-fold'"></i>
                    </p>
                </div>
            </el-col>
            <el-col :span="8">
                消息通知
            </el-col>
            <el-col :span="12">
                <div class="list">
                    <div class="searchWrap">
                       <Search></Search>
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
        controlDrawerNav(){
            var status = this.isDrawerNav?false:true;
            this.drawerChange(status)
        },
        exitLogin(){
           this.$router.push('/login')
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