import axios from 'axios'

class Http {
  init() {
    return axios.create({
      baseURL: process.env.API_URL,
    })
  }
}

export default new Http()