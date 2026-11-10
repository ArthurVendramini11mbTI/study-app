import { createRouter, createWebHistory } from 'vue-router'

import login from '@/pages/login.vue'
import sign from '@/pages/sign.vue'
import dashboard from '@/pages/dashboard.vue'
import calendar from '@/pages/calendar.vue'
import section from '@/pages/section.vue'
import settings from '@/pages/settings.vue'
import { hasActiveSession } from '@/services/auth'

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
      component: settings,
      name: 'settings',
      meta: { requiresAuth: true }
    }
  ],
})

router.beforeEach(async (to) => {
  const isAuthenticated = await hasActiveSession()

  if (to.meta.requiresAuth && !isAuthenticated) {
    return "/";
  }

  if ((to.name === 'login' || to.name === 'sign') && isAuthenticated) {
    return '/dashboard'
  }
});

export default router
