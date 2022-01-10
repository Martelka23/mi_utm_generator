import { createRouter, createWebHistory } from 'vue-router'

import Information from '../views/Information.vue'
import GeneratorUtm from '../views/GeneratorUtm.vue'

const routes = [
  {
    path: '/',
    name: 'GeneratorUtm',
    component: GeneratorUtm
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
