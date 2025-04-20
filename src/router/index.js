import Vue from 'vue';
import Router from 'vue-router';

import HeroSection from '@/components/HeroSection.vue';
import AboutUs from '@/components/AboutUs.vue';
import UserDashboard from '@/components/UserDashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: HeroSection },
    { path: '/about', name: 'About', component: AboutUs },
    { path: '/dashboard', name: 'Dashboard', component: UserDashboard },
  ],
});
