import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from '~pages'
import generatedRoutes from 'virtual:generated-pages'

import './assets/main.css'

const app = createApp(App)

console.log('routes', generatedRoutes)

app.use(createPinia())
app.use(
  createRouter({
    history: createWebHistory(),
    routes,
  })
)

app.mount('#app')
