<script lang="ts">

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
  }

}
</script>
  
<template>
<h1>Hello App!</h1>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">Go to Home</router-link><br>
    <router-link to="/about">Go to About</router-link><br>
    <router-link to="/user/123">Go to User</router-link><br>
    <router-link to="/news/123">Go to News</router-link><br>
    <router-link :to="{name: 'news', params: {id: 123}}">Go to News Type 2</router-link><br>
    <router-link to="/parent">Go to Parent</router-link><br>
    <router-link to="/page">Go to Page</router-link><br>
    <router-link to="/shop">Go to Shopping</router-link><br>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里，相当于占位符 -->
  <router-view name="ShopMain"></router-view>
  <router-view></router-view>
  <router-view name="ShopFooter"></router-view>
</template>