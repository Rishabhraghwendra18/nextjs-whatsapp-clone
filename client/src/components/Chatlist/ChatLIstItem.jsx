import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {setSelectedChatUser} from "../../store/chatSlice";
import {getAllContacts} from "../../services/userService";
import List from "./List";

function ChatLIstItem() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state=>state.loggedInUser.emailId);
  const socket = useSelector(state=>state.socket.socket);
  const [allUserContacts, setAllUserContacts] = useState([]);

  useEffect(()=>{
    getUserAllContactsList()
    socket.on('msg-receieved',async (data)=>{
      console.log("message received: ",data);
      await getUserAllContactsList();
    })
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
