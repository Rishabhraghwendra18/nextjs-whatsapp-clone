import Image from "next/image";
import { useRouter } from "next/router";
import sha256 from "sha256";
import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import React,{useState} from "react";
import { createProfile } from "@/services/userService";

function onboarding() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState('');
  const [userEmailId, setUserEmailId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [profileImage, setProfileImage] = useState('/avatars/1.png');

  const handleClickCreateProfile = async ()=>{
    if(!displayName || !userEmailId){
      console.log("Please enter name and email");
      return;
    }
    let payload ={
      name:displayName,
      email:userEmailId,
      password:sha256(userPassword),
      image:profileImage,
      status:'Online'
    }
    try {
      const response = await createProfile(payload);
      if(response.data.status === 200){
          router.push('/login');
      }else{
        console.log("Error occured while creating profile: ",response.data.data);
      }
    } catch (error) {
      console.log("error occured: ",error);
    }
  }
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
          <Input label={"Email"} state={userEmailId} setState={setUserEmailId}/>
          <Input type="password" label={"Password"} setState={setUserPassword} state={userPassword}/>
          <div className="flex items-center justify-center">
          <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={handleClickCreateProfile}>Create Profile</button>
          </div>
        </div>
        <div>
          <Avatar type={"xl"} src={profileImage} setImage={setProfileImage}/>
        </div>
      </div>
  </div>;
}

export default onboarding;
