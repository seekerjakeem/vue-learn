<script lang="ts">
import {ref} from 'vue';
import ChildContent from './components/ChildContent.vue';
export default {

  setup() {
    const msg = ref('helloWorld');
    function reverseMsg() {
      msg.value = msg.value.split('').reverse().join('');
    }
    function injectCounter(value: number) {
      console.log('counter value ',value);
    }
    return {msg, reverseMsg,injectCounter};
  },
  components: {
    ChildContent
  }

}
</script>
  
<template>
  <ChildContent :message="msg" class="box" id="content"  @injectCounter="injectCounter"></ChildContent>
  <button @click="reverseMsg">修改msg</button>
</template>