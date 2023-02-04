
<template>
    <main>
        <h2>新闻页面</h2>
    </main>
</template>

<script setup lang="ts">
    import { useRoute, onBeforeRouteUpdate,onBeforeRouteLeave } from 'vue-router';
    console.log(useRoute().params);
    const id = useRoute().params.id;
    onBeforeRouteLeave((to, from )=> {
        console.log('onBeforeRouteLeave', to);
        console.log('onBeforeRouteLeave', from);
        console.log(id);
    });

    onBeforeRouteUpdate((to, from)=> {
        console.log('onBeforeRouteUpdate', to);
        console.log('onBeforeRouteUpdate', from);
    })

</script>