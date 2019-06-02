<template>
    <div class='app'>
        <div >
            <p v-for="(item, index) in datas" :key="index">{{item}}</p>
            <p>
                <img src="@/assets/img/6-8.png" alt="">
                 <img src="@/assets/img/kids.png" alt="">
            </p>
        </div>
  </div>
</template>

<script>
    export default {
       data() {
        return {
            datas: [1, 2, 3, 4]
        }
      }
    }
</script>

<style  scoped>
@import "./theme/base.css";

.app{
   background: red;
}
</style>