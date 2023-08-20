import React, { useState } from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import ChatLIstItem from "./ChatLIstItem";
import ContactsList from "./ContactsList";

function ChatList() {
  const [isNewChat, setIsNewChat] = useState(false);
  return (
    <div>
      <ChatListHeader setIsNewChat={setIsNewChat} />
      {isNewChat ? <ContactsList /> : (
        <>
        <SearchBar placeholder={"Search Chat"}/>
        <ChatLIstItem />
        </>
      )}
    </div>
  );
}

export default ChatList;
