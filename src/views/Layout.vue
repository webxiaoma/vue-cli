<template>
    <div class='layout'>
          <div class="headerWrap">
             <Header></Header>
          </div>
          <div class="main">
              <router-view></router-view>
          </div>
          <div class="footerWrap">
            <Footer></Footer>
          </div>
    </div>
</template>

<script>
import {Header,Footer} from '@/components'
export default {
    data(){
        return{
            
        }
    },
    components:{
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
   .main{
       flex:1;
   }
}
</style>