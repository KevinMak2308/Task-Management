import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const httpService = {
    get: axios.get,
    post: axios.post
};

export default httpService;