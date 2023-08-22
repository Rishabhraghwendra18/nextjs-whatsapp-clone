import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {IoSend} from 'react-icons/io5';
import { sendMessage } from "../../services/messageService";

function MessageBar({setUserAllMessages}) {
  const selectedChatUser = useSelector(state=>state.selectedChatUser.selectedChatUser.email);
  const loggedInUser = useSelector(state=>state.loggedInUser.emailId);
  const socket = useSelector(state=>state.socket.socket);
  const [userChatMessage, setUserChatMessage] = useState('');

  const handleClickSend = async ()=>{
    if(!userChatMessage){
      console.log("Please enter a chat message");
      return;
    }
    let payload={
      from:loggedInUser,
      to:selectedChatUser,
      message:userChatMessage
    }
    console.log(payload);
    try {
      const response = await sendMessage(payload);
      if(response.data.status){
        setUserAllMessages(prev=>[...prev,{
          message:userChatMessage,
          senderId:loggedInUser,
          receiverId:selectedChatUser
        }]);
        setUserChatMessage('');
        socket.emit("send-msg",payload);
      }else{
        console.log("Error while sending message: ",response.data);
      }
    } catch (error) {
      console.log("Error while sending message: ",error);
    }
  }
  return (
    <div className="bg-input-background py-3 px-5 border-l border-conversation-border h-16 flex items-center gap-3">
        <input
          placeholder="Search or Start new Chat"
          className="flex-1 bg-transparent text-white focus:outline-none text-sm border-2 rounded-lg p-2 border-conversation-border"
          value={userChatMessage}
          onChange={(e)=>setUserChatMessage(e.target.value)}
        />
        <IoSend className="cursor-pointer" onClick={handleClickSend}/>
    </div>
  );
}

export default MessageBar;
