import Axios from 'axios';
import config from '../config/config';

export const studentService = {
    getAll,
    post,
    put,
    deleteStudent
};

function getAll(){
    return Axios.get(config.baseUrl+students).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log("Error in response");
        console.log(err);
    })
}
function post(payload){
    return axios.post(config.baseUrl+apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}
function put(payload){
    return axios.put(config.baseUrl+apiEndpoint, payload, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}

function deleteStudent(){
    return axios.delete(config.baseUrl+apiEndpoint, getOptions()).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}