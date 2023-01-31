import { createRouter, createWebHistory } from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {path: '/',component: HomeView},
  {path:'/about',component: AboutView}
];
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// 5. 创建并挂载根实例 在main.ts中
export default router
