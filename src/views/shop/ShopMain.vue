<template>
    <main>
        <h2>Shopping 主界面</h2>
        <h2>{{id}}</h2>
        <p>********************</p>
    </main>
</template>
<script setup lang="ts">
       const props = defineProps({
        id: String
    });
</script>