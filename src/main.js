import { createApp } from 'vue';
import App from './App.vue';
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import { AmplifyPlugin } from '@aws-amplify/ui-vue'; // <-- use AmplifyPlugin for Vue 3
import '@aws-amplify/ui-vue/styles.css'; // <-- add styles

import router from './router'; // import the router

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configure Amplify with the exported config
Amplify.configure(awsExports);

const app = createApp(App);
app.use(router); // Only if router is set up
app.use(AmplifyPlugin); // <-- use AmplifyPlugin
app.mount('#app');