import axios from 'axios'
import controllers from './controllers/'

export function createLOTRSDK({ baseURL, authToken }: { baseURL: string; authToken: string }) {
  axios.defaults.baseURL = baseURL
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`

  return {
    ...controllers
  }
}

export default createLOTRSDK