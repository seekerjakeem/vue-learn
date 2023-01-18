<script lang="ts">
  export default{
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addCounter() {
        this.counter++;
      },
      addCounterFive(num: number) {
        this.counter += num;
      },
      addCounterFiveWithEvent(num: number, e: any) {
        this.counter += num;
        console.log(e);
      },
    }
  
  }
</script>
  
<template>
  <div>
    <!-- 绑定事件，直接通过代码进行处理 -->
    <h2 @click="counter++">{{counter}}</h2> 
    <!-- 绑定事件  -->
    <h2 @click="addCounter">{{counter}}</h2>
    <!-- 传递参数 -->
    <h2 @click="addCounterFive(5)">{{counter}}</h2>
    <!-- 即传递参数，又传递对象 -->
    <h2 @click="addCounterFiveWithEvent(5, $event)">{{counter}}</h2>
    
  </div>
</template>

<style scoped>
</style>
