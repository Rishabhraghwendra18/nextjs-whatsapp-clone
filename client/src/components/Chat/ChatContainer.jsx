import React from "react";
import { useSelector } from 'react-redux';

function ChatContainer({userAllMessages}) {
  const loggedInUserEmail = useSelector(state=>state.loggedInUser.emailId);
  const selectedChatUser = useSelector(state=>state.selectedChatUser.selectedChatUser);
  const socket = useSelector(state=>state.socket.socket);
 
  return <div className="overflow-auto custom-scrollbar relative w-full flex-grow h-full">
    <div className="bg-chat-background bg-fix h-full w-full absolute top-0 opacity-5 z-0"></div>
    <div className="mx-10 my-6  z-40">
    <div className="flex w-full">
      <div className="flex flex-col justify-end gap-1 w-full overflow-auto">
        {userAllMessages.map((message,index)=>(
          <div key={index}
          className={`flex ${message.senderId === loggedInUserEmail ? "justify-end":"justify-start"}`}
          >
              <div className={`text-white px-2 py-[5px] text-sm rounded-md flex gap-2 items-end max-w-[45%] ${message.senderId === selectedChatUser?.email ? "bg-input-background":"bg-outgoing-background"} `}>
                  <span className="break-all">{message?.message}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>;
}

export default ChatContainer;
