import { createApp } from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configure Amplify with the exported config
Amplify.configure(awsExports)


createApp(App).mount('#app')
