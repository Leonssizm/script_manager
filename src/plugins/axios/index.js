import axios from 'axios'


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default axiosInstance