<script lang="ts">
  export default{
    data() {
      return {
        num: 0,
        uname: '张三',
        messageString: 'helloWorld',
        message: 'this is message',
        initialMessage: '你好',
        employee: {
          name: '张三',
          age: 18,
          gender: 'male'
        }
      }
    },
    computed: {
      reverseMsg:function() {
        return this.messageString.split('').reverse().join('');
      }
    },
    watch:{
      message(newMessage, oldMessage) {
        if(newMessage.length > 10 || newMessage.length <5) {
          console.log("输入长度信息不规范！");
        }
      },
      initialMessage: {
        immediate: true, //初始化就调用函数
        handler: function(newVal, oldVal) {
          if(newVal.length>10 || newVal.length<5) {
            console.log("输入字符串长度不规范");
          }
        }

      },
      // 监听不到对象内部属性的变化，使用深度监听
      // deep: true 表示使用深度监听，监听器会一层层向下遍历，给对象每个属性都加上监听器
      // 使用字符串的形式进行优化，只会监听对象中的某个属性的值的变化
      'employee.name' : {
        handler: function(newVal, oldVal) {
          console.log(newVal);
        },
        deep: true
      }

    }

  }
</script>
  
<template>
  <div>
    <!-- <p>{{num}}</p>
    <div>{{uname}}</div>
    <p>{{reverseMsg}}</p> -->
    <div>{{message}}</div>
    <input type="text" v-model="message">
    <button @click="message = '你好'">改变信息</button><br>
    <p>{{employee.name}}</p>
    <button @click="employee.name = '韩梅梅'">改变名字</button>

  </div>
</template>

<style scoped>
</style>
