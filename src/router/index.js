import { createRouter, createWebHistory } from 'vue-router'

// Import halaman
import Home from '@/views/Home.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import Login from '@/views/admin/Login.vue'
import Forgot from '@/views/admin/Forgot.vue'
import Config from '@/views/admin/Config.vue'
import Nutrition from '@/views/admin/Nutrition.vue'
import Pregnancy from '@/views/admin/Pregnancy.vue'
import Bride from '@/views/admin/Bride.vue'
import Schedule from '@/views/admin/Schedule.vue'
import Family from '@/views/admin/Family.vue'
import Cadre from '@/views/admin/Cadre.vue'
import Membership from '@/views/admin/Membership.vue'
import Profile from '@/views/admin/Profile.vue'

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
    path: '/admin/gizi',
    name: 'nutrition',
    component: Nutrition,
  },
  {
    path: '/admin/hamil',
    name: 'pregnancy',
    component: Pregnancy,
  },
  {
    path: '/admin/catin',
    name: 'bride',
    component: Bride,
  },
  {
    path: '/admin/jadwal',
    name: 'schedule',
    component: Schedule,
  },
  {
    path: '/admin/keluarga',
    name: 'family',
    component: Family,
  },
  {
    path: '/admin/kader',
    name: 'cadre',
    component: Cadre,
  },
  {
    path: '/admin/tpk',
    name: 'membership',
    component: Membership,
  },
  //auth
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
  //administrator
  {
    path: '/admin/config',
    name: 'config',
    component: Config,
  },
  {
    path: '/admin/profile',
    name: 'profile',
    component: Profile,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
