import { createApp } from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader'

Amplify.configure(awsExports)

// Set up Amplify UI Web Components (for auth forms like <amplify-authenticator>)
applyPolyfills().then(() => {
  defineCustomElements(window)
})

createApp(App).mount('#app')
<template>
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
