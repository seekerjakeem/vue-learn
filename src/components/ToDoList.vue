<template>
    <h2>我是todo list</h2>
    <slot :list="list"></slot>
</template>
<script lang="ts">
export default {
    data() {
        return {
            list: [1,2,3,4,5]
        }
    }
}
</script>