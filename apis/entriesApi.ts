import axios from 'axios';


const entriesApi = axios.create({
    baseURL: '/api'
})


export default entriesApi;



