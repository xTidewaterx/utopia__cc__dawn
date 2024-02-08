import React, { useState } from 'react'
import { getFirestore } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';


const databaseCollection = "commentSection7";

//get position of value from within array
export const Like =  (param) => {

    const {likeCount, idValue} = param;

    console.log(param)
    console.log(idValue)
    console.log(param.stateValue.state)





    const likeFunction = async ()  => {
  //is it a like or a dislike:
  //depending on what is clicked
  //Add one 

  const db = getFirestore();

 await updateDoc(doc(db, databaseCollection, idValue), {
  
  
    likeCount: likeCount + 1,
  }).then(console.log("idValue", idValue))

  const result1 =  param.stateValue.state;


//here we add value, and when value
  
let results = result1.map(x => {
  let el = x.ID === idValue ? x : "";
  if (el) return {
      ...x,
      likeCount: likeCount + 1,
  };
 
 
 
  return x;

});

//find the difference
//If you update a State Hook to the same value as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)

param.stateValue.setState(results) //setState, only when changes, we onClick, always render when changes, optimize
//now add reiteration of array as values updated singular updat exact with this object now correct of array, low risk, still need yupda update state
//....
   
    //....
}


    return <div className='organismBattlefield__Like'>{likeCount} <button  onClick= {() => likeFunction ()}>LikeButton</button></div>
 
}
