import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c38e2.firebaseio.com/'
});

export default instance;