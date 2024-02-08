import { getAuth } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AppConfig} from "../../components/strictlyData/AppConfig"
import { initializeApp } from "firebase/app";

import { Navigate, useNavigate } from "react-router-dom";
import {MemoryRouter } from "react-router-dom";
import { Context } from "../../App";

const app = initializeApp(AppConfig);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

//we have strict check on our equality operator now === exact true truth
export const GoogleSignIn = () => {
  const [organism, setOrganism] = useState();

  const [ context, setContext ] = useContext(Context);
 


  console.log(organism)//logging state of our call, app re-render on 
  const navigate = useNavigate();

  const SignIn = () => {
    console.log("context");

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        //this happens if successful promise resolve from function
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      
  
         navigate.push("/")
        


      }) .then(console.log(organism))
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // ...
      });
  };



//console.log(Context._currentValue)

if(context) {
  console.log(context)
  return <Navigate to = "/" replace />


} else
 console.log(context)
  return (
    <button
      onClick={() => {
        SignIn();
      }}
    >
      Sign In
    </button>
  ); 
 }


