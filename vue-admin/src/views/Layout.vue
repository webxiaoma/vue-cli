<template>
    <div class='layout'>
       <el-container>
            <div class="asideWrap">
                <Aside v-if="screen !== 'xs'"></Aside>
                <NavSilder>
                    <Aside></Aside>
                </NavSilder>
                <div class="shade" @click="controlDrawerNav" v-show="isDrawerNav"></div>
            </div>
            <el-container>
                <div class="container">
                    <div class="headerWrap">
                        <Header></Header>
                    </div>
                    <div class="mainWrap">
                       
                    </div>
                    <div class="footerWrap">
                        <Footer></Footer>
                    </div>
                </div>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import {Aside,Header,Footer,NavSilder} from '@/components';

export default {
    data(){
        return{
        }
    },
    computed:{
       ...mapState(['isAsideNav','isLoginPage',"isDrawerNav",'screen']),
    },
    mounted(){
        this.winResize()
    },
    methods:{
        ...mapActions(['navChange','screenChange','drawerChange']),
        winResize(){ // 监听窗口变化
           let width = document.documentElement.clientWidth || document.body.clientWidth;

            if(width <= 768){
               this.navChange(false)
               this.screenChange("xs")
            }
            if(width<992 && width >768){
                 this.navChange(true)
                 this.screenChange("md")
            }
            if(width > 992){
               this.navChange(false)
               this.screenChange("lg")
            }
           
            window.onresize = ()=>{ // 窗口变化时做一些处理
                let width = document.documentElement.clientWidth;
                if(width <= 768){
                   this.navChange(false)
                   this.screenChange("xs")
                }
                if(width<992 && width >768){
                    this.navChange(true)
                    this.screenChange("md")
                }
                if(width > 992){
                    this.navChange(false)
                    this.screenChange("lg")
                }
            }
        },
        controlDrawerNav(){
            var status = this.isDrawerNav?false:true;
            this.drawerChange(status)
        },
    },
    components:{
        Aside,
        Header,
        Footer,
        NavSilder,
    }
}
</script>

<style lang="less" scoped>
.layout{
   min-height:100vh;
   display: flex;
   flex-direction: column;
   overflow: hidden;
   .container{
       width:100%;
       height:100%;
       display: flex;
       flex-direction: column;
   }
   .asideWrap{
        .shade{
            width:100%;
            height:100%;
            position: absolute;
            z-index:7;
            background: rgba(1,1,1,.2);
        }
   }
   .headerWrap{
      height:60px;
      position: relative;
      z-index:10;
   }
   .mainWrap{
       flex:1;
   }
   .footerWrap{
       
   }
}
</style>