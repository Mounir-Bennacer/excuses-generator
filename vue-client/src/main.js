import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VSwitch from 'v-switch-case';
import './index.css';
import './config/axios'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8800/api/excuses/user/'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

store.dispatch('init');

createApp(App)
  .use(VSwitch)
  .use(store)
  .use(router)
  .mount('#app');
