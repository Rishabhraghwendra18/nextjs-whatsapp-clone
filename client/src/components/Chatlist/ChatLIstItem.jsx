import React from "react";
import List from "./List";

function ChatLIstItem() {
  const dummyChatList = [
    {
      name:"ABC",
      profilePic:'/avatars/1.png',
      message:"Dummy message here!",
    },
    {
      name:"DEF",
      profilePic:'/avatars/2.png',
      message:"Dummy message here!",
    },
    {
      name:"HIJ",
      profilePic:'/avatars/3.png',
      message:"Dummy message here!",
    },
    {
      name:"KLM",
      profilePic:'/avatars/4.png',
      message:"Dummy message here!",
    },
    {
      name:"NPO",
      profilePic:'/avatars/5.png',
      message:"Dummy message here!",
    },
    {
      name:"RST",
      profilePic:'/avatars/6.png',
      message:"Dummy message here!",
    },
    {
      name:"UVW",
      profilePic:'/avatars/7.png',
      message:"Dummy message here!",
    },
    {
      name:"XYZ",
      profilePic:'/avatars/8.png',
      message:"Dummy message here!",
    },
    {
      name:"XYZ2",
      profilePic:'/avatars/9.png',
      message:"Dummy message here!",
    },
    // {
    //   name:"XYZ2",
    //   profilePic:'/avatars/9.png',
    //   message:"Dummy message here!",
    // },
  ]
  return <div className="bg-transparent max-h-screen overflow-auto">
    {dummyChatList.map((e,index)=>(
      <List key={index} profilePic={e.profilePic} name={e.name} message={e.message}/>
    ))}
  </div>;
}

export default ChatLIstItem;
