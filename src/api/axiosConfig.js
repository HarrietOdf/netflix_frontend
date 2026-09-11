import axios from 'axios';

export default axios.create({
    baseURL:'http://100.58.162.101:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
