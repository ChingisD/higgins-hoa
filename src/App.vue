<template>
  <div id="app">
    <!-- Show login form if not authenticated -->
    <div v-if="!user">
      <button @click="signIn">Sign In</button>
      <button @click="signUp">Sign Up</button>
    </div>

    <!-- Show user info if authenticated -->
    <div v-else>
      <h1>Welcome, {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { createApp } from 'vue'
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports' // AWS Amplify configuration file

import HelloWorld from './components/HelloWorld.vue'

Amplify.configure(awsconfig)

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      user: null,  // Store the authenticated user
    }
  },
  created() {
    // Check if the user is already authenticated when the app loads
    this.checkUserAuth()
  },
  methods: {
    async checkUserAuth() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        this.user = user
      } catch (error) {
        this.user = null  // No user authenticated
      }
    },
    async signIn() {
      try {
        await Auth.federatedSignIn()  // You can add custom sign-in logic if needed
        this.checkUserAuth()  // Check user status after signing in
      } catch (error) {
        console.log('Error signing in', error)
      }
    },
    async signUp() {
      try {
        const { user } = await Auth.signUp({
          username: 'testuser', // example username
          password: 'TestPassword123!', // example password
          attributes: {
            email: 'testuser@example.com', // example email
          }
        })
        console.log('User signed up successfully', user)
      } catch (error) {
        console.log('Error signing up', error)
      }
    },
    async signOut() {
      try {
        await Auth.signOut()
        this.user = null
      } catch (error) {
        console.log('Error signing out', error)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

