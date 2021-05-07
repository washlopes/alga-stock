import axios from 'axios'

const http = axios.create({
    //baseURL: 'https://jsonplaceholder.typicode.com'
    baseURL: 'http://localhost:4010',
    headers: {
      authorization: 'Bearer 123'
    }
  })

export default http