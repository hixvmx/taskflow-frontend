import axios from 'axios'


const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL ?? "",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    withXSRFToken: true,
})

export default axiosClient;
