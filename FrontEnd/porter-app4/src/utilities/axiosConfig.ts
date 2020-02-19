import axios from 'axios';

export const axiosConfig = axios.create({
    baseURL: 'http://localhost:7070/Project2/'
});