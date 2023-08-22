import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

function Modal({setModalOpen,children,className}) {
  return <div
  className="fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center text-white"
  >
    <div className={`h-max ${className?className:'w-max'} bg-gray-900 gap-6 rounded-lg p-4`}>
        <div onClick={()=>setModalOpen(false)} className="pt-2 pe-2 cursor-pointer flex items-end justify-end">
          <IoClose className="h-10 w-10 cursor-pointer"/>
        </div>
        {children}
    </div>
  </div>;
}

export default Modal;
