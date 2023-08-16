import React from "react";
import Chat from "@/components/Chat/Chat";
import ChatList from "@/components/Chatlist/ChatList";

function index() {
  return <div className="bg-panel-header-background h-screen w-screen p-8 text-white ">
    <div className="flex">
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
