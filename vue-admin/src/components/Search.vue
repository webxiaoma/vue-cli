<template>
   <div :class="searchShow?`search show`:'search'" >
       <div class="icon" @click.stop="changeSearch(true)">
           <i class="el-icon-search"></i>
       </div>
       <div class="inputWrap" @click.stop>
            <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state"
                placeholder="站内搜索"
                @blur="searcheBlur"
                :fetch-suggestions="fetchRequest"
                :trigger-on-focus="false"
                @select="handleSelect"
                :autofocus="autofocus">
                    <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                    </template>
            </el-autocomplete>
       </div>
        
   </div>
</template>

<script>
export default {
  data () {
    return { 
       searchShow:false,
       state:"",
       autofocus:false,
    };
  },
  created(){
    
  },
  mounted(){
      document.getElementsByTagName("body")[0].addEventListener("click",(e)=>{
          this.searchShow = false;
          this.$emit("showSearch",false)
      })
  },
  methods: {
     changeSearch(bol){
         this.searchShow = bol;
         this.$emit("showSearch",bol)
     },
     searcheBlur(){//失去焦点

     },
     handleSelect(){ // 选择时
    
     },
     fetchRequest(){ // 远程请求

     }
  }
}

</script>
<style lang='less' scoped>
.search{
    height:100%;
    width:30px;
    display: flex;
    align-items: center;
    transition:0.4s;
    overflow: hidden;
    .icon{
        cursor: pointer;
        height:100%;
        display: flex;
        align-items: center;
        margin-right:10px;
        i{
            font-size:24px;
        }
    }
    .inputWrap{
        display: inline-block;
        width:190px;
    }
    
    /deep/.el-input__inner{
        border:none;
        width:100%;
        border-bottom:1px solid #DCDFE6;
    }
}

.show{
    transition:0.4s;
    width:224px;
}

</style>