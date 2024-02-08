import React, { useContext, useEffect, useState } from 'react'
import { addDoc, doc, setDoc } from "firebase/firestore"; 
import { AppConfig } from '../strictlyData/AppConfig';
import { getFirestore } from 'firebase/firestore';
import { Context, app } from '../../App';
import { updateDoc, getDoc, collection } from 'firebase/firestore';
//create object posted to database from current context object
//comments structure suggestion:: we will need each organism object with comment to be an object like this::
//id, date, objectCreator, cl (commentLevel, 0-2), parentOrganism(original if none), comment
let updatedDoc = {};
//add data to collection React
export const Comment = (organismObject) => {


    const [state, setState] = useState("");
    const context = useContext(Context)
    const [organism, setOrganism] = useState(context[0] ? context[0] : "")
   const  [updatedDoc, setUpdatedDoc] = useState({}); //dependent on this value to add, we must add a value, added too early
//const uid = context[0][1].uid;
const [valueStore, setValueStore] = useState();
console.log("commentState", updatedDoc)
console.log(organismObject.organismObject.state)

const stateValue = organismObject.organismObject.state;
const setStateValue = organismObject.organismObject.setState;
 let placeholderArray = [];


    useEffect(()=> {

      console.log(organism)

    if(context[0]) {
      setOrganism(context[0][1])

    }

    },[context])


useEffect(()=> {

console.log("panda", updatedDoc)
const placeholderArrayValue = [updatedDoc, ...stateValue, ];

  setStateValue(placeholderArrayValue)

  console.log(updatedDoc, "jungle")

}, [updatedDoc])


    const dateValue = Date.now(); 

    const db = getFirestore(app);
    console.log(context) //context only active when organism linked
    console.log(organism)

    const {uid, accessToken, displayName, email, providerId} = context[0][1];

    //change system
const data =  {

    likeCount: 0,
    name: "hhh",
   // ID: name + Date.now() + cl > 1 ? parentId : ID ,
   ID: dateValue  + uid.replace(/ /g, ''), //avoid same id, same id problems cause problem of recursuionm, when id match, then match ofr same id, again, again
    cl: 0,
    comment: state ,
    organismName: "jjj",
    organismPublicName: "cyberEmperor",
    uid: uid,
    date: Date.now(),
    parentId: "original", //if max cl level is reached, then we attach to top level with parentId same as branch current, we branch same because max level reached
  
}

async function commentFunction () {

 //difference if this was an arrow 

// Arrow Functions Return Value by Default

// hello = () => "Hello World!";
// function has only one statement

const collectionRef = collection(db, "commentSection7")
     //level with callback and fallback, on state change, change, and top level single source truth, binding element
        // Add a new document in collection "cities"
        //removed a param from the setDoc :: , "newValueCCDawn2" - nmow auto id
       Promise.resolve( await addDoc(collectionRef, data).then(
        async function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          //function results in error unless promise resolve properly, on promis resolve we both have id update and resolve promise by adding to top level database, all link database
          //right after we do this, unique ID ther will be regardless, id and then sorted, parentId
    
          await updateDoc(docRef, {
              ID: docRef.id,
            }).then ( async function ()  {

              setUpdatedDoc((await getDoc(docRef)).data());
              console.log((await getDoc(docRef)).data(), "volcano")
         // const updatedDocument = await getDoc(docRef).then(
           
          //placeholderArray =  [...stateValue, updatedDocument.data()];
    


         })
 
          
           } )  

    
        //Promises are a crucial feature in JavaScript that simplifies and enhances the handling of asynchronous operations. 

        // It contains the result of the operation, such as data fetched from a server.
        //promise has the state fulfilled, when the operation is successful, a promise transition to the resolved state, contains result of the operation
        .then(console.log("successfull because this message is a resolution of our promise resolved, good"))
        //When you use await with a promise, the function execution is paused until the promise is resolved or rejected, and then it resumes with the result of the promise.
   
         
         .then(
         // setStateValue(placeholderArray), //if promise resolved we have callback for correct intel
setState("")
         )
        .catch((error)=> {console.log(error)})
        //collection commentSection7
    )}


    //extra stuff to check promise resolved on our function with a promise instance
    const promise = Promise.resolve(commentFunction)

    promise.then((value) => {

        console.log(value)
    })

    return (
    <div>
    <input value={state} onChange={(e) => {setState(e.target.value)}}/>
    
    <button onClick={() => {commentFunction()}}>Comment: {state}</button></div>
  )
}
