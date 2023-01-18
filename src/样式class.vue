<script lang="ts">
  export default{
    data() {
      return {
        active: true,
        errorMsg: null
      }
    },
    computed: {
      isActive() {
        return this.active && !this.errorMsg;
      }
    }
  
  }
</script>
  
<template>
  <div>
    <!-- 第一种，放置字符串 -->
    <p class="helloColor helloFont">hello</p>
    <!-- 第二种，放置对象 -->
    <p :class="{helloColor: true}">hello2</p>
    <!-- 和普通对象一起不会重复 -->
    <p :class="{helloColor: true}" class="helloFont">hello3</p>
    <!-- 使用computed -->
    <p :class="{helloFont:isActive}">hello4</p>
  </div>
</template>

<style scoped>
.helloColor {
  color: red;
}
.helloFont {
  font-size: 50px;
}
</style>
