import React,{useEffect} from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Chat from "@/components/Chat/Chat";
import ChatList from "@/components/Chatlist/ChatList";

function index() {
  const socket = useSelector(state=>state.socket.socket);
  const loggedInUserEmail = useSelector(state=>state.loggedInUser.emailId);
  useEffect(() => {
    if(!socket) return;
    socket.emit("add-user",loggedInUserEmail);
  }, [socket])
  
  return <div className="bg-panel-header-background h-screen w-screen p-8 text-white ">
    <div className="flex h-full">
      <div className="flex-none w-1/4">
        <ChatList/>
      </div>
      <div className="flex-1">
        <Chat/>
      </div>
    </div>
  </div>;
}

export default index;
