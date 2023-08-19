import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from 'react-redux'
import {setLoggedInUser} from "../store/loginSlice";
import { firebaseAuth } from "../utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import {checkUser} from "../services/userService";
import { useRouter } from "next/router";

function login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async ()=>{
    const provider = new GoogleAuthProvider();
    const {user :{displayName:name,email,photoURL:profileImage}} = await signInWithPopup(firebaseAuth,provider);
    dispatch(setLoggedInUser(email))
    let payload = {
      email
    }
    try {
      if(email){
        const {data} = await checkUser(payload);
        if(!data.status){
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
        <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={handleLogin}>
          <FcGoogle className="text-4xl" />
          <span className="text-white text-2xl">Login With Google</span>
        </button>
    </div>
  );
}

export default login;
