import React,{useState} from "react";
import { useDispatch } from 'react-redux';
import { setSelectedChatUser } from "../../store/chatSlice";
import { getUser } from "../../services/userService";
import SearchBar from "./SearchBar";
import List from "./List";

function ContactsList() {
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState([]);
  const [userEmailInput, setUserEmailInput] = useState('');

  const onhandleClickSearch = async ()=>{
    if(!userEmailInput){
      console.log("Please input user email");
      return;
    }
    let payload={
      email:userEmailInput
    }
    try {
      const response = await getUser(payload);
      if(response.data.status === 200){
        console.log(response.data);
        setUsersList([response.data.user]);
      }else{
        console.log("Error while getting searched user: ",response.data);
      }
    } catch (error) {
      console.log("Error while getting searched user: ",error);
    }
  }
  return <div>
    <SearchBar onClickSearch={onhandleClickSearch} onChange={e=>setUserEmailInput(e)} placeholder={"Start New Chat"}/>
    {usersList?.map((user,index)=>(
      <List key={index} profilePic={user?.image||'/avatars/1.png'} name={user?.name} message={''} email={user?.email} onClick={(e)=>dispatch(setSelectedChatUser(user))}/>
    ))}
  </div>;
}

export default ContactsList;
