<template>
    <p>This is TopBar</p>
    <h2>{{message}}</h2>
    <button @click="sumbitChange">提交</button>
</template>
<script lang="ts">
export default {
    props: {
        message: String,
    },
   methods: {
    sumbitChange() {
        // this.$emit('事件名称','发送事件参数')；
        this.$emit('injectMsg', this.message);
    }
   }
    
}
</script>