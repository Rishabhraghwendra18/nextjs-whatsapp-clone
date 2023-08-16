import React from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import ChatLIstItem from "./ChatLIstItem";

function ChatList() {
  return <div>
    <ChatListHeader/>
    <SearchBar/>
    <ChatLIstItem/>
  </div>;
}

export default ChatList;
