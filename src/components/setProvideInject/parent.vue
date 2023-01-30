<script lang="ts">
import ChildContent2 from './ChildContent2.vue';
import { ref, provide } from 'vue';
export default {
  setup(){
    const name = ref('张三');
    function changeName() {
      name.value = '李四';
    };
    provide('name',name);
    return {changeName}
  },
  components: {
    ChildContent2
  }

}
</script>
  
<template>
  <ChildContent2></ChildContent2>
  <button @click="changeName">修改name</button>
</template>