import { createRouter, createWebHistory } from 'vue-router'
import Deploy from '../components/Deploy.vue'  // The component displaying your markdown

const routes = [
  { path: '/deploy', name: 'Deploy', component: Deploy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router