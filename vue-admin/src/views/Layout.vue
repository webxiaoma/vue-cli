<template>
    <div class='layout'>
       <el-container>
            <div class="asideWrap">
                <!-- <Aside></Aside> -->
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
import {Aside,Header,Footer} from '@/components';

export default {
    data(){
        return{
        }
    },
    computed:{
       ...mapState(['isAsideNav','isLoginPage',"isDrawerNav"]),
    },
    mounted(){
        this.winResize()
    },
    methods:{
        ...mapActions(['navChange']),
        winResize(){ // 监听窗口变化
           let width = document.documentElement.clientWidth || document.body.clientWidth;
            if(width<992){
                this.navChange(true)
            }
            if(width>=992){
                this.navChange(false)
            }
            window.onresize = ()=>{ // 窗口变化时做一些处理
                let width = document.documentElement.clientWidth;
                if(width<992){
                    this.navChange(true)
                }
                if(width>=992){
                    this.navChange(false)
                }
            }
       }
    },
    components:{
        Aside,
        Header,
        Footer,
    }
}
</script>

<style lang="less" scoped>
.layout{
   min-height:100vh;
   display: flex;
   flex-direction: column;
   .container{
       width:100%;
       height:100%;
       display: flex;
       flex-direction: column;
   }
   .asideWrap{
   }
   .headerWrap{
      height:60px;
   }
   .mainWrap{
       flex:1;
   }
   .footerWrap{
       
   }
}
</style>