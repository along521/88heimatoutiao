import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home' // 简写路径
import Login from '../views/login' // 登陆

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  // 一级路由  主页
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  // 一级路由  登陆
  {
    path: '/login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
