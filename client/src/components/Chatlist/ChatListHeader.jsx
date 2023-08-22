import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../common/Avatar";
import { MdMessage } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { getUser } from "@/services/userService";

function ChatListHeader({ setIsNewChat }) {
  const loggedInUserEmail = useSelector((state) => state.loggedInUser.emailId);
  const [loggedInUserDetails, setLoggedInUserDetails] = useState({});

  useEffect(() => {
    getLoggedInUserDetails();
  }, []);
  const getLoggedInUserDetails = async () => {
    let payload = {
      email: loggedInUserEmail,
    };
    try {
      const response = await getUser(payload);
      if (response.data.status === 200) {
        setLoggedInUserDetails(response.data.user);
      } else {
        console.log(
          "Error while getting logged in user details: ",
          response.data
        );
      }
    } catch (error) {
      console.log("Error while getting logged in user details: ", error);
    }
  };
  return (
    <div className="bg-input-background p-4 flex items-center h-16">
      <Avatar
        type={"sm"}
        src={loggedInUserDetails?.image || "/avatars/4.png"}
      ></Avatar>
      <div className="flex flex-col justify-between pl-4 gap-2">
        <span>{loggedInUserDetails?.name}</span>
      </div>
      <div className="ml-auto flex items-center gap-1">
        <MdMessage
          onClick={() => setIsNewChat((prev) => !prev)}
          className="cursor-pointer"
        />
        <SlOptionsVertical />
      </div>
    </div>
  );
}

export default ChatListHeader;
