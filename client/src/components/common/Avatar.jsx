import Image from "next/image";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Modal from "./Modal";

function Avatar({ type, src, setImage }) {
  const [hover, setHover] = useState(false);
  const [openPhotoLibrary, setOpenPhotoLibrary] = useState(false);
  const profileImagesLibrary = [
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/6.png",
    "/avatars/7.png",
    "/avatars/8.png",
    "/avatars/9.png",
  ]
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
          <div
            className="relative cursor-pointer z-0"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2
              ${hover ? "visited" : "hidden"}
              `}
              onClick={() => setOpenPhotoLibrary(true)}
            >
              <FaCamera className="text-2xl" />
              <span>
                Change <br /> Profile <br />
                Photo
              </span>
            </div>
            <div className="relative h-60 w-60">
              <Image src={src} alt="avatar" className="rounded-full" fill />
            </div>
          </div>
        )}
      </div>
      {openPhotoLibrary && (
        <Modal
          setImage={setImage}
          setModalOpen={setOpenPhotoLibrary}
        >
          <div className="grid grid-cols-3 justify-center items-center gap-16 p-20 w-full">
            {profileImagesLibrary.map((image, index) => (
              <div
                onClick={() => {
                  setImage(image);
                  setOpenPhotoLibrary(false);
                }}
              >
                <div className="h-24 w-24 cursor-pointer relative">
                  <Image src={image} alt="avatar" fill />
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}

export default Avatar;
