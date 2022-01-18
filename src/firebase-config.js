import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDE33tMoppC9mS7ZsdrLLFXWqC9Crytn_Q",
    authDomain: "blog-1d94a.firebaseapp.com",
    projectId: "blog-1d94a",
    storageBucket: "blog-1d94a.appspot.com",
    messagingSenderId: "982149736820",
    appId: "1:982149736820:web:58f70a3cd2a813fbe4e421",
    measurementId: "G-LNCY3ZHK6B"
  };

  const app = initializeApp(firebaseConfig);
  export const db= getFirestore(app)
  export const autho = getAuth(app);



