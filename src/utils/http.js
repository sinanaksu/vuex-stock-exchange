import axios from 'axios'

const req = axios.create({
  baseURL: process.env.API_URL,
})

export default req