<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goForward">前进</button>
    <button @click="goBack">后退</button>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
onMounted(()=> {
  console.log(useRoute().query);
});
const router = useRouter();
function goForward() {
  router.go(1);
  // router.forward();
}
function goBack() {
  router.go(-1);
  // router.back();
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
