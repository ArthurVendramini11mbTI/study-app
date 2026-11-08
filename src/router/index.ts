import { createRouter, createWebHistory } from 'vue-router'

import login from '@/pages/login.vue'
import sign from '@/pages/sign.vue'
import dashboard from '@/pages/dashboard.vue'
import calendar from '@/pages/calendar.vue'
import section from '@/pages/section.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: login,
      name: 'login'
    },
    {
      path: '/sign',
      component: sign,
      name: 'sign'
    },
    {
      path: '/dashboard',
      component: dashboard,
      name: 'dashboard',

      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/calendar',
      component: calendar,
      name: 'calendar',
      meta: { requiresAuth: true }
    },
    {
      path: '/goals',
      component: section,
      name: 'goals',
      props: { title: 'Goals', icon: 'tabler:target-arrow' },
      meta: { requiresAuth: true }
    },
    {
      path: '/subjects',
      component: section,
      name: 'subjects',
      props: { title: 'Subjects', icon: 'tabler:book' },
      meta: { requiresAuth: true }
    },
    {
      path: '/progress',
      component: section,
      name: 'progress',
      props: { title: 'Progress', icon: 'tabler:chart-line' },
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      component: section,
      name: 'settings',
      props: { title: 'Settings', icon: 'tabler:settings' },
      meta: { requiresAuth: true }
    }
  ],
})

router.beforeEach((to) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    return "/";
  }
});

export default router
