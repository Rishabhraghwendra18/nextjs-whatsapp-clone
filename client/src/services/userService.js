import axios from "axios";

export const HOST = 'http://localhost:3005';

export const checkUser = async (payload)=>{
    return await axios.post(HOST+'/api/auth/check-user',payload);
}
export const createProfile = async (payload)=>{
    return await axios.post(HOST+'/api/auth/create-profile',payload)
}