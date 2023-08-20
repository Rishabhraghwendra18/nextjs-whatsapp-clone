import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedChatUser} from "../../store/chatSlice";
import {getAllContacts} from "../../services/userService";
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
  const loggedInUser = useSelector(state=>state.loggedInUser.emailId);
  const dispatch = useDispatch();
  const [allUserContacts, setAllUserContacts] = useState([]);

  useEffect(()=>{
    getUserAllContactsList()
  },[])
  const getUserAllContactsList = async ()=>{
    let payload={
      email:loggedInUser
    }
    try {
      const response = await getAllContacts(payload);
      if(response.data.status === 200){
        console.log(response.data.users);
        setAllUserContacts(response.data.users)
        if(response.data.users?.length > 0){
          dispatch(setSelectedChatUser(response.data.users[0]));
        }
      }
      else{
        console.log("Error while fetching contacts: ",response.data)
      }
    } catch (error) {
      console.log("Error while fetching contacts: ",error);
    }
  }
  return <div className="bg-transparent max-h-screen overflow-auto">
    {allUserContacts.map((user,index)=>(
      <List key={index} profilePic={user?.image || '/avatars/1.png'} name={user.name} message={''} email={user.email} onClick={()=>dispatch(setSelectedChatUser(user))}/>
    ))}
  </div>;
}

export default ChatLIstItem;
