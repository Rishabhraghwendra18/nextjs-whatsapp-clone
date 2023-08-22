import React from "react";
import { useSelector } from 'react-redux';
import Avatar from "../common/Avatar";

function ChatHeader() {
  const chatUser = useSelector(state=>state.selectedChatUser.selectedChatUser)
  return <div className="bg-input-background p-3 border-l border-conversation-border h-16 flex items-center">
    <Avatar type={"sm"} src={chatUser?.image || "/avatars/3.png"}/>
    <div className="flex flex-col justify-between pl-4 gap-2">
      <span>{chatUser?.name}</span>
      <span className="text-secondary line-clamp-1 text-sm">Online/Offline</span>
    </div>
  </div>;
}

export default ChatHeader;
