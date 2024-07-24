import axios, { InternalAxiosRequestConfig } from 'axios';
const jwt = 'bla';
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 300,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((request:InternalAxiosRequestConfig) => {
    console.log('test 🙃',request);
    if(jwt){
        request.headers.Authorization = jwt;
    }else{
        // Promise.reject()
        // redirect to login page
    }
    return request; 
})

export default instance;
