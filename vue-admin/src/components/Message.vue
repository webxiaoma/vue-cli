<template>
   <div class='messageWrap'>
        <el-popover
            placement="bottom"
            width="400"
            popper-class="header-popper-message"
            trigger="click">
                <div class="message">
                    <el-tabs 
                        v-model="activeTab" 
                        :stretch="true"
                        @tab-click="tabClick">
                            <el-tab-pane label="通知(3)" name="inform">
                               <div class="inform">
                                  <div class="list">
                                       <div class="item">
                                           <div class="flag">
                                               <i class="el-icon-message"></i>
                                           </div>
                                           <div class="content">
                                               <div class="title">这是一个新通知</div>
                                               <div class="time">2018-9-7-31</div>
                                           </div>
                                       </div>
                                        <div class="item">
                                           <div class="flag">
                                               <i class="el-icon-message"></i>
                                           </div>
                                           <div class="content">
                                               <div class="title">这是一个这是一个新通知这是一个新通知这是一个新通知新通知</div>
                                               <div class="time">2018-9-7-31</div>
                                           </div>
                                       </div>
                                  </div>
                                  <div class="bottomBtn">
                                        <div class="look btn">已阅读</div>
                                        <div class="more btn">查看更多</div>
                                  </div>
                               </div>
                            </el-tab-pane>
                            <el-tab-pane label="待办(2)" name="backlog">
                                 <div class="inform">
                                  <div class="list">
                                       <div class="item">
                                           <div class="flag">
                                               <i class="el-icon-message"></i>
                                           </div>
                                           <div class="content">
                                               <div class="title">这是一个待办</div>
                                               <div class="time">2019-7-31</div>
                                           </div>
                                       </div>
                                        <div class="item">
                                           <div class="flag">
                                               <i class="el-icon-message"></i>
                                           </div>
                                           <div class="content">
                                               <div class="title">这是一个待办>这是一个待>这是>这是一个待办>这是一个待办</div>
                                               <div class="time">2019-7-31</div>
                                           </div>
                                       </div>
                                  </div>
                                  <div class="bottomBtn">
                                        <div class="look btn">已阅读</div>
                                        <div class="more btn">查看更多</div>
                                  </div>
                               </div>
                            </el-tab-pane>
                    </el-tabs>
                </div>
                <div slot="reference" class="bell">
                    <el-badge :value="12"  :max="99" class="item">
                       <i class="el-icon-bell"></i>
                    </el-badge>
                </div>
            </el-popover>
   </div>
</template>

<script>
export default {
  data () {
    return {
        activeTab:"inform"
    };
  },
  created(){

  },
  methods: {
    tabClick(e){
        console.log(e)
        
    }
  }
}

</script>
<style lang='less' scoped>
.messageWrap{
    height:100%;
    .bell{
        height:100%;
        display: flex;
        align-items: center;
        i{
            font-size:24px;
        }
    }

   
}

</style>

<style lang="less">
@import "~@/theme/base-theme.less";
.header-popper-message{
     padding:12px 0 0 0;
    .message{
       .inform{
         width:100%;
         .list{
           width:100%;
           .item{
             width:100%;
             height:76px;
             cursor: pointer;
             padding:10px;
             display: flex;
             border-bottom:1px solid #eee;
             overflow: hidden;
             &:hover{
                 background:rgb(213, 236, 253);
             }
             .flag{
               width:40px;
               height:40px;
               font-size:36px;
               margin-right:15px;
               color:rgb(243, 101, 7);
              }
             .content{
                 width:84%;
                 .title{
                     width:100%;
                     overflow: hidden;
                     text-overflow:ellipsis;
                     white-space: nowrap;
                     font-size:14px;
                     margin-bottom:10px;
                 }
                 .time{
                     font-size:12px;
                     color:rgb(121, 121, 121);
                 }
               
             }


           }
         }
         .bottomBtn{
             width:100%;
             display: flex;
             .btn{
                 width:50%;
                 height:50px;
                 cursor: pointer;
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 font-size:16px;
                 &:hover{
                    background:rgb(222, 239, 251);
                 }
             }
             .look{
                 border-right:1px solid #eee;
             }
         }
       }
     }


    // element
    .el-tabs__header{
        margin-bottom:0;
    }
}

// 手机端样式 小于768
@media (max-width: @screen-xs) {
  .header-popper-message{
     width:97% !important;
  }
}
</style>
