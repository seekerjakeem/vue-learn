<template>
    <p>我是父组件</p>
    <ChildCmp>
        <template v-slot:header>
            <h2>This is header</h2>
        </template>
        <template v-slot:content>
            <h2>This is content</h2>
            <p>{{message}}</p>
        </template>
        <template v-slot:footer>
            <h2>This is footer</h2>
        </template>
    </ChildCmp>
    <ToDoList>
        <template v-slot:default = "slotProp">
            <ul>
                <li v-for="item in slotProp.list" :key="item">{{item}}</li>
            </ul>    
        </template>
    </ToDoList>

    <ToDoList>
        <template v-slot:default = "slotProp">
            <ol>
                <li v-for="item in slotProp.list" :key="item">{{item}}</li>
            </ol>    
        </template>
    </ToDoList>
    <button @click="changeMsg">改变message</button>
</template>
<script lang="ts">
import ChildCmp from './ChildCmp.vue';
import ToDoList from './ToDoList.vue';
export default {
    data() {
      return {
        message: 'content 具体内容',
        str: "我是字符串消息",
        obj: {
            message: 'content 具体内容'
        }
      }  
    },
//     props: {
//     },
   methods: {
    changeMsg() {
        this.message = '你好';
        this.obj.message = '你好呀';
    }
   },
components: {
    ChildCmp,ToDoList
},
// provide: {
//     strMessage: '传递字符串消息',
// },
// 如果想去访问实例的属性，在provide中作为函数的存在
provide() {
    return {
        strMessage: this.message,
        // 使用对象类型
        obj: this.obj,
        // 函数式返回响应状态
        msgByFunc: () => { return this.message}
        
    }
}
    
}
</script>