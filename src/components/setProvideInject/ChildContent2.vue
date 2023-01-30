<template>
    <h2 ref="h2">This is child content 2</h2>
    <h2>{{name}}</h2>
</template>
<script lang="ts">
import { onUpdated, ref,inject } from 'vue';
export default {
    setup() {
        const name = inject('name')
        return {name}
    }
}
</script>