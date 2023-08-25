import React from "react";
import Image from "next/image";

function Empty() {
  return <div className="flex items-center justify-center gap-2 text-white h-[100%]">
  <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
  <span className="text-7xl">Whatsapp</span>
</div>;
}

export default Empty;
