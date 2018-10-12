import axios from 'axios';

const instance = axios.create({
    baseURL: "https://freelancers-3afeb.firebaseio.com/"
});

export default instance;