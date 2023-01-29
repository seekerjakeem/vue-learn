<script lang="ts">
import {ref, reactive, watch, watchEffect} from 'vue';
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
    const counter = ref(0);
    counter.value = 0;
    function changeCounter() {
      counter.value++;
    };
    watch (counter, (newVal, oldVal)=> {
      console.log('newVal:',newVal);
      console.log('oldVal:',oldVal);
    });

    const user = reactive({
      name: '张三',
      age: 18
    });
    function changeUserName() {
      user.name = '李四';
    }
    watchEffect(() => {
      console.log('counter -- ',counter);
      console.log('user -- ', user.name);
    })
    return {counter, changeCounter, user,changeUserName}
  }

}
</script>
  
<template>
 <h2>{{counter}}</h2>
 <button @click="changeCounter">修改counter</button>
 <h2>{{user.name}}</h2>
 <button @click="changeUserName">修改counter</button>
</template>