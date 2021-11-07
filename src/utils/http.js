import axios from 'axios'

const req = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
})

export default req