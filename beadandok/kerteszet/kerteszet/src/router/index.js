import { createRouter, createWebHistory } from 'vue-router'
import PlantsView from '../views/PlantsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'plants',
      component: PlantsView,
    },
  ],
})

export default router
