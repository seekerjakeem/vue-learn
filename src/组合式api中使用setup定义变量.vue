<script lang="ts">
import {ref, reactive,toRefs} from 'vue'; 
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  },
  setup() {
    let msg = 'hello';
    console.log(msg);
    // 没有响应式
    function changeMsg() {
      msg = '你好';
    }
    // 通过ref定义响应式变量
    let counter = ref(0);
    counter.value = 0;
    // ref返回带有value属性的对象
    function changeCounter() {
      counter.value++;
    }
    // 通过reactive定义引用类型数据
    let obj = reactive({
      name: '张三',
      age: 18
    });
    let obj2 = reactive({
      name: '张三',
      age: 28,
      child: {
        name: '小黄',
        age:18
      }
    });
    function changeObjName() {
      obj.name = '李四';
      console.log(obj);
    }
    // 使用es6扩展运算符使得对象中的属性不是响应式的
    // toRefs使结构后的数据重新获得响应式
    // return {msg, changeMsg,counter,changeCounter, obj,...obj2, changeObjName};
    return {msg, changeMsg,counter,changeCounter, obj,...toRefs(obj), changeObjName};
  },
  beforeCreate() {
    console.log("execute beforeCreate");
  }

}
</script>
  
<template>
  <h2>{{msg}}</h2>
  <button @click="changeMsg">修改message</button>
  <h3>{{counter}}</h3>
  <!-- 模板会自动解析value值 -->
  <button @click="changeCounter">修改counter</button><br>
  <h3>{{obj.name}}</h3>
  <button @click="changeObjName">修改对象</button>
  <h3>{{name}}</h3>
  <h3>{{age}}</h3>

</template>