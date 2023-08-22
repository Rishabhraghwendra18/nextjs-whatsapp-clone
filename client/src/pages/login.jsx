import React,{useEffect,useState} from "react";
import Image from "next/image";
import {MdOutlineMail} from 'react-icons/md';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import {setLoggedInUser} from "../store/loginSlice";
import { firebaseAuth } from "../utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import {checkUser} from "../services/userService";
import { useRouter } from "next/router";
import {io} from "socket.io-client";
import { addSocket } from "../store/socketSlice";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";

function login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [userEmailId, setUserEmailId] = useState('');
  useEffect(()=>{
    const socket = io(process.env.NEXT_PUBLIC_SERVER_HOST);
    dispatch(addSocket(socket));
  },[])
  const handleLogin = async ()=>{
    
    // const provider = new GoogleAuthProvider();
    // const {user :{displayName:name,email,photoURL:profileImage}} = await signInWithPopup(firebaseAuth,provider);
    dispatch(setLoggedInUser(userEmailId));
    let payload = {
     userEmailId
    }
    try {
      if(userEmailId){
        const {data} = await checkUser(payload);
        if(data.status){
          router.push('/onboarding');
        }else{
          router.push('/');
        }
      }
    } catch (error) {
      console.log("error while logging in: ",error);
    }
  }
  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
        <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={()=>setLoginModalOpen(true)}>
          <MdOutlineMail className="text-4xl text-white" />
          <span className="text-white text-2xl">Login With Email</span>
        </button>
        {loginModalOpen && 
        <Modal setModalOpen={setLoginModalOpen} className={'w-[700px]'}>
          <div className="flex flex-col items-center justify-center gap-3 w-full">
          <h2 className="text-xl">Log In</h2>
          <Input label={"Email"} setState={setUserEmailId} state={userEmailId}/>
          <button className="flex items-center justify-center gap-7 bg-panel-header-background p-5 rounded-lg" onClick={handleLogin}>Login</button>
          </div>
        </Modal>}
    </div>
  );
}

export default login;
