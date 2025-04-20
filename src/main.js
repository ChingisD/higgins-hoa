import { createApp } from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { applyPolyfills, defineCustomElements } from '@aws-amplify/ui-components/loader'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configure Amplify with the exported config
Amplify.configure(awsExports)

// Set up Amplify UI Web Components (for auth forms like <amplify-authenticator>)
applyPolyfills().then(() => {
  defineCustomElements(window)
})

createApp(App).mount('#app')
