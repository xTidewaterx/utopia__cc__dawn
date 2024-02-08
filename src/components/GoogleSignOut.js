import { getAuth, signOut } from "firebase/auth";
//we must handle auth compacitvely, data flow streamlined context update state in components addicted to that state, instead of many listeners or many places to re-render conditionally

import { initializeApp } from "firebase/app"; //we  are free, the logic is there, create then have original elements

import { AppConfig } from "../components/strictlyData/AppConfig";
import { Context } from "../App";


const app = initializeApp(AppConfig);

export const auth = getAuth(app);



export const GoogleSignOut = () => {


  const signOutFunction = () => {

    signOut(auth).then(() => {
      console.log("logged out")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.log(error.message)
    });

  }

if(Context) {
console.log(Context)
  return <button onClick={() => {signOutFunction()}}>Sign out</button>

} else {
console.log(Context)
 return <div>Sign Out</div>
}

}