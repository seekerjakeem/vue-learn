<script lang="ts">
import {ref, reactive, computed} from 'vue';
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
    const msg = ref('helloWorld');
    const reverseMsg = computed(() => {
      return msg.value.split('').reverse().join('');
    });
    // computed返回一个带有value属性的对象
    console.log(reverseMsg.value);
    return {}
  }

}
</script>
  
<template>

</template>