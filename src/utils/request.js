import axios from 'axios'

export default {
    get(url,data){
        return axios.get(url,{params:data})
    },
    post(url,data){
        return axios.post(url,data)
    }   
}