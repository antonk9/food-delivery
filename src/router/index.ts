import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categories/:categoryId',
    name: 'categories',
    component: () => import(/* webpackChunkName: "categories" */ '@/views/Categories.vue')
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '@/views/Product.vue')
  },
  {
    path: '/stores',
    name: 'stores',
    component: () => import(/* webpackChunkName: "categories" */ '@/views/Stores.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
