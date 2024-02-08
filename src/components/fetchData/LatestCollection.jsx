import React, { useEffect, useState } from 'react'



import { collection, getDocs } from "firebase/firestore";

import { db } from '../strictlyData/AppConfig';


export const LatestCollection = async () => {
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(true);
  let collectionArray = [];

console.log("latestCollection: ", state)






    const querySnapshot = await getDocs(collection(db, "commentSection7"));
   

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      
 if(doc.data().ID!=state[0]?.ID) {

    console.log("pear", doc.data().ID!=state[0]?.ID)
    

collectionArray= [...collectionArray, doc.data()]
console.log("collectionArray", collectionArray)

setLoading(false) // this could change depending on return value
 } //this happens, this before it sends it over, we have entire call

 //Async functions always return a promise. If the return value 
 //of an async function is not explicitly a promise, it will be implicitly wrapped in a promise. 
 //promise async we now have collectionArray that becoms our state, collection array entirety and then the newest value until we have same, entire new On-Chain

 if (!Array.isArray(state)) {
  console.log("state becomes array")

    setState(
        collectionArray
         )

         console.log("flame", state)
       
 } else {
  console.log("waiting to become array")
 }
 

    })

    const protoArray2 = [
      { ID: 9, parentId: 4, cl: 2 },
    
      {
        ID: 1,
        parentId: "original",
        cl: 0,
      },
    
      {
        ID: 5,
        parentId: "original",
        cl: 0,
      },
    
      { ID: 2, parentId: 1, cl: 1 },
    
      { ID: 3, parentId: 2, cl: 2 },
    
      { ID: 8, parentId: 4, cl: 2 },
    
      {
        ID: 7,
        parentId: 5, //targetting second original object, now to have restructuring of array into digital tree structure
        cl: 1,
      },
    
      { ID: 6, parentId: 4, cl: 2 },
    
      { ID: 4, parentId: 1, cl: 1 },
    ];


    return  "hhhhhh";


}


//we had a connectino, problem, array set our state when we set value after we have asynchronoyus, there is value, we have entire value from call, then setstate