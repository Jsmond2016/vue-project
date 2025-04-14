import axios from 'axios'

const httpInstance = axios.create({
  baseURL: 'localhost:3000'
})


export default httpInstance