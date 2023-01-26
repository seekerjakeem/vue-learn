<template>
    <h2 ref="h2">This is content</h2>
    <!-- 在父组件中，通过v-on监听子组件的自定义事件 -->

    <!-- 父子组件的访问形式
    父组件访问子组件， $ref
    -->
    <TopBar :message= "msg" @injectMsg="getChildMsg" ref="topbar"></TopBar>
</template>
<script lang="ts">
import TopBar from './TopBar.vue';
export default {
    data() {
        return {
            msg:'Hello World',
            required: true,
            type:String
        }
    },
    methods: {
        getChildMsg: function(msg: String) {
            console.log(msg);
       
        }
    },
    mounted() {
        console.log(this.$refs);          
    },
    components:{
        TopBar
    }
}
</script>