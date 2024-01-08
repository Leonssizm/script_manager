import { createRouter, createWebHistory } from 'vue-router'
import ScriptManager from '@/views/ScriptManagerView.vue'
import ManualCheckers from '@/views/ManualCheckersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'scriptManager',
      component: ScriptManager
    },
    {
      path: '/manual-checkers',
      name: 'manualCheckers',
      component: ManualCheckers
    }
  ]
})

export default router
