import React,{useState} from "react";
import { useDispatch } from 'react-redux';
import { setSelectedChatUser } from "../../store/chatSlice";
import SearchBar from "./SearchBar";
import List from "./List";

function ContactsList() {
  const dispatch = useDispatch();
  return <div>
    <SearchBar/>
    <List profilePic={'/avatars/1.png'} name={'Test user'} message={''} email={'testuser@gmail.com'} onClick={(e)=>dispatch(setSelectedChatUser({name:"test user",email:"testuser@gmail.com"}))}/>
  </div>;
}

export default ContactsList;
