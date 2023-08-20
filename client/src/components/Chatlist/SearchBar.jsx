import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

function SearchBar({onClickSearch,onChange}) {
  return <div className="p-1.5 text-white">
    <div className="bg-input-background py-1.5 flex gap-3 items-center  rounded-l">
    <AiOutlineSearch className="flex-none w-1/6 cursor-pointer" onClick={onClickSearch}/>
    <input type="email" placeholder="Search or Start new Chat" className="flex-1 bg-transparent text-white focus:outline-none text-sm" onChange={e=>onChange(e.target.value)}/>
    </div>
  </div>;
}

export default SearchBar;
