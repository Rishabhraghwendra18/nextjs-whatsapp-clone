import Image from "next/image";
import React from "react";

function Avatar({type,src}) {
  return <>
  <div className="flex items-center justify-center">
    { type === "sm" && (
      <div className="relative h-10 w-10">
          <Image src={src} alt="avatar" className="rounded-full" fill></Image>
      </div>
    )}
    { type === "lg" && (
      <div className="relative h-14 w-14">
          <Image src={src} alt="avatar" className="rounded-full" fill></Image>
      </div>
    )}
  </div>
  </>;
}

export default Avatar;
