<template>
    <main>
        <button @click="goHomePage">Go Home Page</button><br>
        <button @click="goAboutPage">Go About Page</button><br>
        <button @click="goUserPage">Go User Page</button><br>
        <button @click="goNewsPage">Go News Page</button><br>
        <button @click="goAboutPageWithParm">Go News Page With Param</button><br>
        <button @click="replaceOne">替换当前位置1</button><br>
        <button @click="replaceTwo">替换当前位置2</button><br>

    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function goHomePage() {
    router.push('/');
}
// 通过传入对象
function goAboutPage() {
    router.push({path: '/about'});
}
// 带参数
function goUserPage() {
    router.push({path: '/user/123'});
}
function goNewsPage() {
    router.push({name: 'news', params: {id: 12345}});
}
function goAboutPageWithParm() {
    router.push({path:'/about',query: {name: '张三', age: 18} });
}
function replaceOne() {
    router.push({path:'/about',query: {name: '张三', age: 18}, replace: true });
}
function replaceTwo() {
    router.replace({path:'/about',query: {name: '张三', age: 18}});
}
</script>