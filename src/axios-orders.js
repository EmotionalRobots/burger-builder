 import axios from 'axios'

 const instance = axios.create({
     baseURL: 'https://react-burger-c6ca0.firebaseio.com/'
 })

 export default instance;