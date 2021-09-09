import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://127.0.0.1:6005/api',
    timeout: 2500,
    headers:{
        'Content-Type': 'application/json'
    },
})