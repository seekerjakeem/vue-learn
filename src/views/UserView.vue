
<template>
    <main>
        <h2>用户界面</h2>
    </main>
</template>
<!-- <script lang="ts">
 export default{
    props: ['id'],
    mounted() {
        console.log(this.$route.params.id);
        console.log(this.id);
    }
 }
</script> -->


<script setup lang="ts">
    //this.$route.params.id  $route表示当前活跃的路由对象
    import { useRoute } from 'vue-router';
    console.log(useRoute().params.id); 
    const props = defineProps({
        id: String
    });
    console.log('prop id:', props.id);

</script>