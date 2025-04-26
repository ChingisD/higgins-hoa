import { createRouter, createWebHistory } from 'vue-router';

import HeroSelection from '@/components/HeroSelection.vue';
import AboutUs from '@/components/AboutUs.vue';
import UserDashboard from '@/components/UserDashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: HeroSelection },
  { path: '/about', name: 'About', component: AboutUs },
  { path: '/dashboard', name: 'Dashboard', component: UserDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
