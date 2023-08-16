import React from "react";
import ChatList from "@/components/Chatlist/ChatList";

function index() {
  return <div className="bg-panel-header-background h-screen w-screen p-8 text-white ">
    <div className="flex">
      <div className="flex-none w-1/4">
        <ChatList/>
      </div>
      <div className="flex-1">
        chat zone
      </div>
    </div>
  </div>;
}

export default index;
