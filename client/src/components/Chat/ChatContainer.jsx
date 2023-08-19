import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getMessage } from "../../services/messageService";

function ChatContainer() {
  const loggedInUserEmail = useSelector(state=>state.loggedInUser.emailId);
  const [userAllMessages, setUserAllMessages] = useState([]);

  useEffect(()=>{
    getUserAllMessage();
  },[])
  const getUserAllMessage = async ()=>{
    let payload = {
      from:"abcd@gmail.com",
      to:"beast@gmail.com"
    }
    try {
      const response = await getMessage(payload);      
      if(response.data.status === 200){
        console.log(response.data);
        setUserAllMessages(response.data.messages);
      }
      else{
        console.log("Error while getting user messages: ",response.data);
      }
    } catch (error) {
       console.log("Error while getting user messages: ",error);
    }
  }
  return <div className="overflow-auto custom-scrollbar relative w-full flex-grow h-full">
    <div className="bg-chat-background bg-fix h-full w-full absolute top-0 opacity-5 z-0"></div>
    <div className="mx-10 my-6  z-40">
    <div className="flex w-full">
      <div className="flex flex-col justify-end gap-1 w-full overflow-auto">
        {userAllMessages.map((message,index)=>(
          <div key={index}
          className="flex justify-start"
          >
              <div className="text-white px-2 py-[5px] text-sm rounded-md flex gap-2 items-end max-w-[45%] bg-outgoing-background">
                  <span className="break-all">{message?.message}</span>
              </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  </div>;
}

export default ChatContainer;
