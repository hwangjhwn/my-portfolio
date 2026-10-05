import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Portfolio', component: () => import('@/pages/Portfolio.vue') },
    { path: '/projects/:id', name: 'Project', component: () => import('@/pages/ProjectDetail.vue') },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/pages/404.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 96, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' };
    return { top: 0 };
  },
});
