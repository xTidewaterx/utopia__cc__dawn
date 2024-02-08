import { addDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";
import { db } from "../strictlyData/AppConfig";
import React, { useEffect, useState } from "react";



//reply function replies by adding data, wehn data add is succsessful, then we setState of parent on top level
//we have a promise that must resolve, when promise resolve meaning all godd then we change state with good data


export const Reply = (organismObject) => {

  const [inputValue, setInputValue] = useState("");

  const { ID, cl, comment, name, organismDisplayName, uid, parentId } =
    organismObject?.organismObject ? organismObject?.organismObject : {};

    //parent state ,now on new reply parentState is now changed, true false, when added data succsessful
   // A successful request will be indicated by a 200 OK HTTP status code, and the response will contain the data we're retrieving. 
useEffect(()=> {

console.log(inputValue)
console.log(uid)
console.log(organismObject.stateValue)

  //digital conquest, we have final source through our enlightned experience, top level
  //all is always rendered by top level source directly from database link, single state
  //render of applciation, mutate array, spread, array then new current value, now all tree link, branches many from top original soource, source is clear, truth is near
},[])

//links now return, we have our tree, any tree is dependant on original source and we have hte demands of the edcosystem, level top,
//and we have source by id, unique id, by both name and exact when, we have parent id on exact source, single source and top level database single source state, re render component state, top lev el single truth component

const dateValue = Date.now(); //this is for value to be updated when invoked on new post requeests add data to databaase
    
const localParentId = cl > 1 ? parentId : ID;
//unique id, have organism limited by spacee, orgnaism, date
  const replyFunction = async () => {
    console.log(uid)
    //bem naming:: nav --nav item--- nav-item-button ---begin with container ---card ---card-image- card-image-underline --container--container-columns
    console.log(inputValue);
    const data = {
      likeCount: 0,
      name: name,
     // ID: name + Date.now() + cl > 1 ? parentId : ID ,
     ID: dateValue  + uid.replace(/ /g, ''), //avoid same id, same id problems cause problem of recursuionm, when id match, then match ofr same id, again, again
      cl: cl > 1 ? cl : cl + 1,
      comment: inputValue ,
      organismName: name,
      organismPublicName: "cyberEmperor",
      uid: uid,
      date: Date.now(),
      parentId: cl > 1 ? parentId : ID, //if max cl level is reached, then we attach to top level with parentId same as branch current, we branch same because max level reached
    };

    const collectionRef = collection(db, "commentSection7");

    // Add a new document in collection "cities"
    //removed a param from the setDoc :: , "newValueCCDawn2" - nmow auto id
    Promise.resolve(
      await addDoc(collectionRef, data)
        //Promises are a crucial feature in JavaScript that simplifies and enhances the handling of asynchronous operations.

        // It contains the result of the operation, such as data fetched from a server.
        //promise has the state fulfilled, when the operation is successful, a promise transition to the resolved state, contains result of the operation
        .then( async function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          //function results in error unless promise resolve properly, on promis resolve we both have id update and resolve promise by adding to top level database, all link database
          //right after we do this, unique ID ther will be regardless, id and then sorted, parentId
            await updateDoc(docRef, {
              ID: docRef.id,
            }).then(console.log("id updated"))

           console.log(docRef)
     setInputValue("")
          console.log(
            "successfull because this message is a resolution of our promise resolved, good");
           const  newArray =  [...organismObject.stateValue?.state, data];
           const newArraySorted = newArray.sort((a, b) => (a.date - b. date))
   
           organismObject.stateValue?.setState (newArraySorted);


            //organismObject.stateValue?.setState( [...organismObject.stateValue?.state, resultOfOperation])


            //this message happens only when there is a problem:: // we must write each function point
        })
        //When you use await with a promise, the function execution is paused until the promise is resolved or rejected, and then it resumes with the result of the promise.

        .catch((error) => {
          console.log(error);
        })
      //collection commentSection7
    );
  };

  return (
    <div className="organismBattlefield__Reply">
  
      <button
        onClick={() => {
          replyFunction();
        }}
      >
        Reply{" "}
      </button>
 
      <input
      placeholder="reply..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
};
