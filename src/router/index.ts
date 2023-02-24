import { createRouter, createWebHistory } from 'vue-router'
import routes from '@views'
// const routes = [
//   { path: '/', component: () => import('@/views/HomeView.vue') },
//   { path: '/about', component: () => import('@/views/AboutView.vue') },
// ]

export default createRouter({
  history: createWebHistory(),
  routes,
})
