<template>
   <div :class="isDrawerNav?'navSilder show':'navSilder'">
        <div class="text">
            <slot></slot>
        </div>
   </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
  data () {
    return {

    };
  },
  computed: {
     ...mapState(["isDrawerNav","screen"]),
  },
  created(){

  },
  methods: {

  }
}

</script>
<style lang='less' scoped>
.navSilder{
    position: absolute;
    z-index:8;
    width:250px;
    height:100%;
    padding-top:60px;
    transition:0.3s;
    background:#001529;
    transform: translateX(-100%);
    overflow: hidden;
    .text{
        width:100%;
        height:100%;
        position: absolute;
        z-index:9;
        overflow-y: scroll;
        padding-bottom:60px;
    }
}
.show{
    transform: translateX(0px)
}
</style>