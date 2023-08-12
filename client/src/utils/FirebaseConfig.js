import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjiP10ZdA2T92HPqb8SKyUVRrYxveYj90",
  authDomain: "nextjs-whatsapp-clone-ca10e.firebaseapp.com",
  projectId: "nextjs-whatsapp-clone-ca10e",
  storageBucket: "nextjs-whatsapp-clone-ca10e.appspot.com",
  messagingSenderId: "305424026990",
  appId: "1:305424026990:web:b0641d73cfe3067453c57f",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);