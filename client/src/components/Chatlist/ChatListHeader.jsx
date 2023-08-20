import React from "react";
import Avatar from "../common/Avatar";
import { MdMessage } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

function ChatListHeader({setIsNewChat}) {
  return (
    <div className="bg-input-background p-4 flex items-center h-16">
      <Avatar type={"sm"} src={"/avatars/4.png"}></Avatar>
      <div className="ml-auto flex items-center gap-1">
        <MdMessage onClick={()=>setIsNewChat(prev=>!prev)} style={{cursor:'pointer'}}/>
        <SlOptionsVertical />
      </div>
    </div>
  );
}

export default ChatListHeader;
