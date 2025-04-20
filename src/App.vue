<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import HeroSection from './components/HeroSection.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  components: {
    AppNavbar,
    HeroSection,
    AppFooter
  }
};
</script>

<style>
/* Add some global styles if needed */
</style>
