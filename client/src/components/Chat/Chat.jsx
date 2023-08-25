import React,{useEffect,useState} from "react";
import { useSelector } from 'react-redux';
import ChatHeader from "./ChatHeader";
import MessageBar from "./MessageBar";
import ChatContainer from "./ChatContainer";
import { getMessage } from "../../services/messageService";
import Empty from "../Empty";

function Chat() {
  const loggedInUserEmail = useSelector(state=>state.loggedInUser.emailId);
  const selectedChatUser = useSelector(state=>state.selectedChatUser.selectedChatUser);
  const socket = useSelector(state=>state.socket.socket);
  const [userAllMessages, setUserAllMessages] = useState([]);

  useEffect(()=>{
    if(!socket) return;
    if(!selectedChatUser?.email)return;
    getUserAllMessage();
    console.clear();
    console.log("cleared and: ",selectedChatUser)
    socket.on('msg-receieved',async (data)=>{
      console.log("message received: ",userAllMessages);
      // setUserAllMessages([...userAllMessages,data]);
      await getUserAllMessage();
    })
  },[selectedChatUser])
  const getUserAllMessage = async ()=>{
    let payload = {
      from:loggedInUserEmail,
      to:selectedChatUser?.email
    }
    try {
      const response = await getMessage(payload);      
      if(response.data.status === 200){
        console.log("user messages",response.data);
        setUserAllMessages(response.data.messages);
      }
      else{
        console.log("Error while getting user messages: ",response.data);
      }
    } catch (error) {
       console.log("Error while getting user messages: ",error);
    }
  }
  return <div className="border-l border-input-background h-full flex flex-col">
    <div className="flex-none">
    <ChatHeader/>
    </div>
    <div className="flex-1">
    {selectedChatUser?.email ?<ChatContainer userAllMessages={userAllMessages}/>:<Empty/>}
    </div>
    <div className="flex-none">
    <MessageBar setUserAllMessages={setUserAllMessages}/>
    </div>
  </div>;
}

export default Chat;
