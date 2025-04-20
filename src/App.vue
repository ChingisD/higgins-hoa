<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Footer
  }
};
</script>

<style>
/* Add some global styles if needed */
</style>




























<!-- <template>
  <amplify-authenticator>
    <div>
      <h1>Welcome to HOA Dashboard</h1>
      <!-- Add your dashboard content here -->
    </div>
  </amplify-authenticator>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add any styles you want here */
</style> -->