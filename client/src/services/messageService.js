import axios from "axios";

const HOST = 'http://localhost:3005';

export const getMessage = async (payload)=>{
    return await axios.post(HOST+'/api/message/getMessage',payload);
}
export const sendMessage = async (payload)=>{
    return await axios.post(HOST+'/api/message/sendMessage',payload);
}