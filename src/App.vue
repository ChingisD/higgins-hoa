<template>
  <Authenticator>
    <template v-slot="{ signOut }">
      <div id="app">
        <AppNavbar />
        <HeroSelection />
        <button @click="signOut" style="margin: 20px;">Sign Out</button>
        <button @click="createUser">Test API - Create User</button>
        <AppFooter />
      </div>
    </template>
  </Authenticator>
</template>

<script>
import { Authenticator } from '@aws-amplify/ui-vue';
import AppNavbar from './components/AppNavbar.vue';
import HeroSelection from './components/HeroSelection.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    Authenticator,
    AppNavbar,
    HeroSelection,
    AppFooter
  },
  methods: {
    async createUser() {
      try {
        const response = await fetch('https://4wy085db51.execute-api.us-east-1.amazonaws.com/Dev/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: 'user001',
            name: 'John Doe',
            email: 'john@example.com'
          })
        });
        const data = await response.json();
        console.log(data);
        alert('User created!');
      } catch (err) {
        console.error(err);
        alert('Error creating user.');
      }
    }
  }
};
</script>