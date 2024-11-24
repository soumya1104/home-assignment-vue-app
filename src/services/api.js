import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://node-neo4j-server-app.onrender.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getData() {
        return apiClient.get('/data');
    }
};