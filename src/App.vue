<script lang="ts">
import ParentCmp from './components/ParentCmp.vue';
import ChildCmp from './components/ChildCmp.vue';
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    ParentCmp,ChildCmp
  }

}
</script>
  
<template>
  <ParentCmp>
  </ParentCmp>
</template>