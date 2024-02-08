import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app"; 
import { useContext } from "react";
import { Context } from "../App";
import { AppConfig } from "./strictlyData/AppConfig";
import React, { useEffect, useState } from "react";
import { ChangeContext } from "./ChangeContext";

//main objective:: change state/context
const app = initializeApp(AppConfig);

export const auth = getAuth(app);

export const ListenAuthChanges = () => {
  const [state, setState] = useState("");
  const [ context, setContext ] = useContext(Context);
 


console.log(context)

//this is context

  useEffect(() => {




    const authListener = () =>
    onAuthStateChanged(auth, (user) => {

 
      if (user) {
    console.log("organism signed in accepted for user function")
        const uid = user.uid;
        setContext([true, user])

    
        //setState(uid);
        console.log(user)

   

      } else {
        console.log("logged out signed out")

   setContext(false)
      }
    });


  authListener();


  }, [])



return state
  }
