<template>
   <div class='search'>
       <div class="icon" @click="changeSearch(true)">
           <i class="el-icon-search"></i>
       </div>
       <div :class="searchShow?`inputWrap show`:'inputWrap'" >
            <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state"
                placeholder="站内搜索"
                @blur="changeSearch(false)"
                @select="handleSelect">
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
    };
  },
  created(){
   
  },
  methods: {
     changeSearch(bol){
         this.searchShow = bol;
     },
     handleSelect(){

     }
  }
}

</script>
<style lang='less' scoped>
.search{
    height:100%;
    display: flex;
    align-items: center;
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
        transition:0.8s;
        width:10px;
        display:none;
    }
    .show{
        transition:0.8s;
        width:190px;
        display:block;
    }

    /deep/.el-input__inner{
        border:none;
        width:100%;
        border-bottom:1px solid #DCDFE6;
    }
}
</style>