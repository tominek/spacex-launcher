import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: { name: 'Launches' } },
      { path: 'launches', name: 'Launches', component: () => import('pages/Launches.vue') },
      { path: 'launches/:id', name: 'LaunchDetail', component: () => import('pages/LaunchDetail.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
