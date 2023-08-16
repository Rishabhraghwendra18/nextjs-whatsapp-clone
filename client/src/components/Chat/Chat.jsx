import React from "react";
import ChatHeader from "./ChatHeader";
import MessageBar from "./MessageBar";
import ChatContainer from "./ChatContainer";

function Chat() {
  return <div className="border-l border-input-background h-full flex flex-col">
    <div className="flex-none">
    <ChatHeader/>
    </div>
    <div className="flex-1">
    <ChatContainer/>
    </div>
    <div className="flex-none">
    <MessageBar/>
    </div>
  </div>;
}

export default Chat;
