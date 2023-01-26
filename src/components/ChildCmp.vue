<template>
    <h2>我是子组件</h2>
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
    <GrandsonCmp></GrandsonCmp>
</template>
<script lang="ts">
import GrandsonCmp from './GrandsonCmp.vue'
export default {
//     props: {
//     },
//    methods: {
   
//    }
components: {
    GrandsonCmp
},
inject: ['strMessage']
    
}
</script>