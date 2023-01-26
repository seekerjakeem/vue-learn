<script lang="ts">
  export default{
    data() {
      return {
        msg: '',
        checked: true,
        fruits: [],
        sex: '男',
        city: '济南'
      }
    },
    methods: {
      changeValue(e:any){
        console.log(e);
        this.msg = e.target.value;
      }
    }
  
  }
</script>
  
<template>
  <!-- v-model 基本使用  -->
  <input type="text" v-model="msg">
  <h2>{{msg}}</h2>
  <!-- 原理：
  1. v-bind绑定一个value属性；
  2. v-on给当前元素添加一个input事件 -->
  <input type="text" :value="msg" @input="changeValue">
  <h2>{{msg}}</h2><br>
  <!-- 复选框
  单个勾选框， v-model为布尔值
  -->
  <input type="checkbox" v-model="checked">
  <h2>{{checked}}</h2><br>
  <!-- 多个勾选框 -->
  <input type="checkbox" v-model="fruits" value="苹果">苹果
  <input type="checkbox" v-model="fruits" value="香蕉">香蕉
  <input type="checkbox" v-model="fruits" value="车厘子">车厘子
  <input type="checkbox" v-model="fruits" value="橙子">橙子
  <h2>我喜欢的水果{{fruits}}</h2>
  <!-- 单选框 -->
  <input type="radio" v-model="sex" value="男">男
  <input type="radio" v-model="sex" value="女">女
  <h2>{{sex}}</h2>
  <!-- 选项框 -->
  <select name="" id="" v-model="city">
    <option value="北京">北京</option>
    <option value="上海">上海</option>
    <option value="济南">济南</option>
    <option value="苏州">苏州</option>
  </select>
  <h2>选择城市{{city}}</h2>
</template>
<style scoped>
</style>