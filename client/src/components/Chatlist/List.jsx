import React from "react";
import Avatar from "../common/Avatar";

function List({ name, profilePic, message,email,onClick }) {
  return (
    <div className="flex items-center hover:bg-input-background mt-1 p-4" onClick={()=>onClick({email,name})}>
      <Avatar type={"lg"} src={profilePic} />
      <div className="flex flex-col justify-between pl-4">
        <span>{name}</span>
        <span className="text-secondary line-clamp-1 text-sm">{message}</span>
      </div>
    </div>
  );
}

export default List;
