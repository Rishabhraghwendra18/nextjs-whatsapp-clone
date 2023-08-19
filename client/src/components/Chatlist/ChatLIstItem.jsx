import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedChatUser} from "../../store/chatSlice";
import List from "./List";

function ChatLIstItem() {
  const dummyChatList = [
    {
      name:"ABC",
      profilePic:'/avatars/1.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"DEF",
      profilePic:'/avatars/2.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"HIJ",
      profilePic:'/avatars/3.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"KLM",
      profilePic:'/avatars/4.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"NPO",
      profilePic:'/avatars/5.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"RST",
      profilePic:'/avatars/6.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"UVW",
      profilePic:'/avatars/7.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"XYZ",
      profilePic:'/avatars/8.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    {
      name:"XYZ2",
      profilePic:'/avatars/9.png',
      message:"Dummy message here!",
      email:"test@gmail.com"
    },
    // {
    //   name:"XYZ2",
    //   profilePic:'/avatars/9.png',
    //   message:"Dummy message here!",
    // },
  ];
  const selectedChatUser = useSelector(state=>state.selectedChatUser.selectedChatUser);
  const dispatch = useDispatch();

  return <div className="bg-transparent max-h-screen overflow-auto">
    {dummyChatList.map((e,index)=>(
      <List key={index} profilePic={e.profilePic} name={e.name} message={e.message} email={e.email} onClick={(e)=>dispatch(setSelectedChatUser(e))}/>
    ))}
  </div>;
}

export default ChatLIstItem;
