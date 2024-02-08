import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';



export const AppConfig = {
    //your config
    apiKey: "AIzaSyAqiW1FNjZsF4aQpgo3_83eDXV-9InUWMs",
  
    authDomain: "chat-app-1dd41.firebaseapp.com",
  
    projectId: "chat-app-1dd41",
  
    storageBucket: "chat-app-1dd41.appspot.com",
  
    messagingSenderId: "474863012188",
  
    appId: "1:474863012188:web:3933bccf0f756c4b6ad999",
  
    measurementId: "G-3R32YD7VM5",
  };

//commentSection7 I assume for organism interlink with cl comment level, organismuser and parentId, date for order, interlink flat structure with extra object preoprties flat database


const app = initializeApp(AppConfig);
export const db = getFirestore(app)