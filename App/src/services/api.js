import axios from 'axios';

const api = axios.create ({
    baseURL: 'http://192.168.4.174:4444'
});

export default api;

// http://localhost:4444  http://192.168.7.255:4444