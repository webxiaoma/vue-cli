<template>
   <div class='home'>
       <h1>开始项目</h1>
       <img src="@/assets/img/logo.jpg" alt="">
       <a href="https://webxiaoma.github.io/project-cli/docs/blogs/">
           <h3>查看工具文档</h3>
       </a>
   </div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  created(){

  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.home{
    padding-top:100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        margin-bottom:20px;
    }
    a{
        color:#159515;
        margin-top:20px;
        &:hover{
            color:#006b00;
        }
    }
}

</style>