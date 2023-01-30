<template>
    <h2 ref="h2">This is child content</h2>
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="sendParent">发送数据</button>
</template>
<script lang="ts">
import { onUpdated, ref } from 'vue';
export default {
    props: {
        message: {
            type: String,
            default: '你好'
        }
    },
    setup(props, context) {
        console.log(props);
        onUpdated(()=> {
            console.log('改变msg',props.message);
        });
        // 可以将组件中的属性进行展示，非响应式
        console.log('attrs', context.attrs);

        const counter = ref(20);
        function sendParent() {
            context.emit('injectCounter', counter.value);
        }
        return {counter, sendParent}
    },
    components:{
    }
}
</script>