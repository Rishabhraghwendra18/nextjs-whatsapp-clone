import React from "react";
import Avatar from "../common/Avatar";
import { MdMessage } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

function ChatListHeader() {
  return (
    <div className="bg-input-background p-4 flex items-center">
      <Avatar type={"sm"} src={"/avatars/4.png"}></Avatar>
      <div className="ml-auto flex items-center gap-1">
        <MdMessage />
        <SlOptionsVertical />
      </div>
    </div>
  );
}

export default ChatListHeader;
