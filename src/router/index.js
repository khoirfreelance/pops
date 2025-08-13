import { createRouter, createWebHistory } from 'vue-router'

// Import halaman
import Home from '@/views/Home.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import Login from '@/views/admin/Login.vue'
import Forgot from '@/views/admin/Forgot.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/admin/forgot',
    name: 'forgot',
    component: Forgot,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
