import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VSwitch from 'v-switch-case';
import './index.css';
import './config/axios'

store.dispatch('excuse/init');

createApp(App)
  .use(VSwitch)
  .use(store)
  .use(router)
  .mount('#app');
