import { createRouter, createWebHistory } from 'vue-router'

import login from '@/pages/login.vue'
import sign from '@/pages/sign.vue'
import dashboard from '@/pages/dashboard.vue'

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