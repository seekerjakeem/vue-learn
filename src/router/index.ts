import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
// import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import UserView from '../views/UserView.vue';
import NotFound from '../views/NotFound.vue';
import News from '../views/News.vue';
import Parent from '../views/Parent.vue';
import StyleOne from '../views/StyleOne.vue';
import StyleTwo from '../views/StyleTwo.vue';
import Page from '../views/Page.vue';
import ShopTop from '../views/shop/ShopTop.vue';
import ShopMain from '../views/shop/ShopMain.vue';
import ShopFooter from '../views/shop/ShopFooter.vue';

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: '/',
    // 重定向
    redirect: '/home'
  },
  {
    path: '/1',
    // 使用命名路由重定向
    redirect: {name: 'news'}
  },
  {
    path: '/2/:id',
    redirect: (to) => {
      // 在函数中添加判断
      console.log(to); 
      ``    if(to.params.id == 1) {
        return {path: '/about'}
      }
      return {path: '/'}
    }
  },
  {
    path: '/home',
    // component: HomeView
    component: ()=> import('../views/HomeView.vue')
  },
  {
    path:'/about',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      console.log('to in about', to);
      console.log('from in about', from);
      if(true) { // 调用next函数，放行； 比如对当前token进行判断
        next();
      }
    }
  },
  // 动态路由
  {path: '/user/:id', component: UserView, props: true},
  {
    /* 动态参数一定是数字
     path: '/news/:id(\\d+)',*/ 
   
     /* 可以传递多个参数
    useRoute().params.id是一个list
    path: '/news/:id+',
    */

    /*参数可有可无， 参数可以重复叠加
    path: '/news/:id*',
     */

    /*参数可有可无，但是不能重复叠加
    
    path: '/news/:id?',
    http://127.0.0.1:5173/news/123/21332 这样就成了404
    */
    name: 'news',
    path: '/news/:id',
    component: News
  },
  {
    path: '/parent', 
    alias: '/father',
    component: Parent,
    children: [
      {
        path: 'styleone', component: StyleOne
      },
      {
        path: 'styletwo', component: StyleTwo
      }
    ]
  },
  {path: '/page', component: Page},
  {
    path: '/shop/:id',
    components: {
      default: ShopTop,
      ShopMain: ShopMain,
      ShopFooter: ShopFooter
    },
    props: {default: true, ShopMain: true, ShopFooter: false}
  },

  // 使用正则表达式，匹配任意的；
  {path:'/:path(.*)',component: NotFound}
];
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // createWebHashHistory 二者区别，有无#号
  // createWebHashHistory 改变url时，不会向服务器发送请求
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});
// 全局守卫
// router.beforeEach((to, from, next) => {
//  console.log('to', to);
//  console.log('from', from);
//  // 执行完next才会渲染组件，并且路径也不会发生改变，next相当于通行证
//  next();
// });

// 5. 创建并挂载根实例 在main.ts中
export default router
