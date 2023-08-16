import React from "react";
import {IoSend} from 'react-icons/io5';

function MessageBar() {
  return (
    <div className="bg-input-background py-3 px-5 border-l border-conversation-border h-16 flex items-center gap-3">
        <input
          placeholder="Search or Start new Chat"
          className="flex-1 bg-transparent text-white focus:outline-none text-sm border-2 rounded-lg p-2 border-conversation-border"
        />
        <IoSend/>
    </div>
  );
}

export default MessageBar;
