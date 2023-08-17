import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import Image from "next/image";
import React,{useState} from "react";

function onboarding() {
  const [displayName, setDisplayName] = useState('');
  const [about, setAbout] = useState('');
  const [profileImage, setProfileImage] = useState('/default_avatar.png');

  return <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image
        src={"/whatsapp.gif"}
        alt="whatsapp"
        height={300}
        width={300}
        />
        <span className="text-7xl">WhatsApp</span>
      </div>
      <h2 className="text-xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          <Input label={"Display Name"} state={displayName} setState={setDisplayName} />
          <Input label={"About"} state={about} setState={setAbout}/>
          <div className="flex items-center justify-center">
          <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={()=>{}}>Create Profile</button>
          </div>
        </div>
        <div>
          <Avatar type={"xl"} src={profileImage} setImage={setProfileImage}/>
        </div>
      </div>
  </div>;
}

export default onboarding;
