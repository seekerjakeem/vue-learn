<script lang="ts">
  export default{
    data() {
      return {
        activeColor: 'red',
        fontSize: '50px',
        bgc:'pink',
        styleObj: {
          color: 'red',
          fontSize: '50px',
          'background-color': 'pink'
        }

      }
    }
  
  }
</script>
  
<template>
  <div>
    <!-- 第一种，放置字符串 -->
    <p style="color: red">hello1</p>
    <!-- 第二种，放置对象 -->
    <p :style="{color: activeColor, fontSize: fontSize, 'background-color': bgc}">hello2</p>
    <!-- 数组语法 -->
    <p :style="[styleObj]">hello3</p>

  </div>
</template>

<style scoped>
</style>
