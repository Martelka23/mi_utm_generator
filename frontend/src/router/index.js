import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import GeneratorUtm from '../views/GeneratorUtm.vue'

const routes = [
  {
    path: '/',
    name: 'GeneratorUtm',
    component: GeneratorUtm
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
