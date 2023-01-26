<template>
    <h3>我是孙子组件</h3>
    <p>{{ message}}</p>
    <p>响应式message --- {{obj.message}}</p>
    <p>相应死msgByFunc --- {{msgByFunction()}}</p>
</template>
<script lang="ts">
export default {
    //     props: {
    //     },
    //    methods: {

    //    }
    data() {
        return {
            message: this.strMessage,
            msgByFunction: this.msgByFunc,
        }
    },
    inject:['strMessage','obj','msgByFunc']
}
</script>