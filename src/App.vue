<template>
  <div id="app">
    <AppNavbar />
    <HeroSelection />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import HeroSelection from './components/HeroSelection.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  name: 'App',
  components: {
    AppNavbar,
    HeroSelection,
    AppFooter
  }
};
</script>

<style>
/* Add some global styles if needed */
</style>
