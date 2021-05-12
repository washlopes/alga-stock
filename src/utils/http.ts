import axios from 'axios'
import { store } from '../redux'

const http = axios.create({
    //baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http://localhost:3024'    
  })

http.interceptors.request.use((config) => {
  const token = store.getState().authentication.profile?.token

  if (token)
    config.headers.authorized = `Bearer ${token}`
  
    return config
})
export default http