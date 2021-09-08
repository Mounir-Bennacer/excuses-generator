import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8800/api/excuses/'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
