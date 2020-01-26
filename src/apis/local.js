import axios from 'axios';
// do this to shorten up the amount of code that's required to hit the endpoint
// usage: const response  = local.post('/login')
const local = axios.create({
    baseURL: 'localhost:5000/api',
    headers: {'Content-Type': 'application/json'}
});

export default local