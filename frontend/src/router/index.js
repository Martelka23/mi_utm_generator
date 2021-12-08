import { createRouter, createWebHistory } from 'vue-router'

import Contacts from '../views/Contacts.vue'
import GeneratorUtm from '../views/GeneratorUtm.vue'

const routes = [
  {
    path: '/',
    name: 'GeneratorUtm',
    component: GeneratorUtm
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
