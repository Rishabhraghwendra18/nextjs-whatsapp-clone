import Image from "next/image";
import React,{useState} from "react";
import {FaCamera} from "react-icons/fa";
import PhotoLibrary from "./PhotoLibrary";

function Avatar({ type, src, setImage }) {
  const [hover, setHover] = useState(false);
  const [openPhotoLibrary, setOpenPhotoLibrary] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={src} alt="avatar" className="rounded-full" fill></Image>
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={src} alt="avatar" className="rounded-full" fill></Image>
          </div>
        )}
        {type === "xl" && (
          <div className="relative cursor-pointer z-0" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
              <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2
              ${hover ? "visited":"hidden"}
              `}
              onClick={()=>setOpenPhotoLibrary(true)}
              >
                <FaCamera className="text-2xl"/>
                <span>Change <br/> Profile <br/>Photo</span>
              </div>
            <div className="relative h-60 w-60">
              <Image src={src} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
      {openPhotoLibrary && <PhotoLibrary setImage={setImage} hidePhotoLibrary={setOpenPhotoLibrary}/>}
    </>
  );
}

export default Avatar;
