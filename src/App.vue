<template>
  <div id="app">
    <amplify-authenticator>
      <AppNavbar />
      <HeroSelection />
      <AppFooter />
    </amplify-authenticator>
  </div>
</template>

<script>
import { components } from '@aws-amplify/ui-vue';
import AppNavbar from './components/AppNavbar.vue';
import HeroSelection from './components/HeroSelection.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    ...components, // Important to register Amplify components
    AppNavbar,
    HeroSelection,
    AppFooter
  }
};
</script>

<style>
/* Add some global styles if needed */
</style>
