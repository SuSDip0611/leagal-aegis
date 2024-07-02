import axios from 'axios';

import { API_URL } from '../Utils/helpers';

axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['withCredentials'] = false;
// axios.defaults.headers.common['X-WP-NONCE'] = true;

export default axios.create({
    baseURL : API_URL,
    responseType: "json"
});