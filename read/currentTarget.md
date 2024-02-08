1.currentTarget::: create something ,the entire thing, then it can fight for change









  id is updated on reply, we have updated id, check if reply component provides correct id, is there a   combonitaion ,  long row of numbers
 separate our commentSection and topSection

























our array must be sorted, something happens with the sorting::
now top level stays the same, from firebase, we must sort it after, ALSO::
comment component is currently adding faulty data values to our database, this causes chaos because some data is outside of render due to faulty values, values without syunchronization, we must create correct ID updates to match firebase tree structure in our leveled dataset, level tree, add comments pure add ddata pure, comments component faulty, callback if this then after that, mutate array

A callback is a function passed as an argument to another function. 

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
            })













no document to update, something about cl and id targetting update, likebutton, possibly a problem with id of uploaded comments, any update that is added 
ID problem













 currently we are logging immediately on update from within our renderData, we must have direct returns from our database, otherwise we can link to returns that do not exsist, only on client side, server datbaase side linked glbobal must be correct, we have state update, useEffect, useEffect do something after render, side effects, we now have snapshot listener:::
 

    const unsubscribe = onSnapshot(
      collection(db, "commentSection7"), 
      (snapshot) => {
        console.log(snapshot)
      },
      (error) => {
        // ...
      });



wwith error, from within snapshot and collection snapshot with snapshot on parenthesis, we have data, now add data drom snapshot to state, data snapshot is confirmed atabase server link




 we must have instant update, we must rerun state and call if array is not complete, array can be stopped if we duplicate, but entire function must rerun if we add something to database and the coun() aggregation runs, our array is not complete when we run reply, if reply then our state complete is false, we delete entire array and add again, or we add exact that does not match, we run entire array, add only outlier id



have instant change state and update array , and have like, we send to backend, update frontend questionable

//have array change completely


 have a component send create array and use destructured state of top level component, change that state nad hvae values top level









we give state to child and child updates state on real instant udpates firebase database listener top array link







querySnapshot.forEach((doc) => {
    itemArray = [...itemArray, doc.data()];
  });

  setRandomItem(
    itemArray[Math.floor(Math.random() * itemArray.length)]
  );
const data = {



}










 we now have data structure, recursive function, now we upload our current most pristine example onto our github to eternalize it for the exact cc dawn pitch economics free platform playgorund monet5ary policy





we have a flat data structure that we want to recreate as a tree
what we do::
find match for current cl level, then find first match for that
//when we find match we alwys continue, if not we fall back, until no matches, then function recalled until no cl 0 has no further array values

















experimentArray.map((data) => {
     const {cl, ID, parentId} = data;
    
    
      if(cl == 0) {
    
           
       console.log(  experimentArray.map((lvl) => lvl.parentId == ID))
       //now we have all matches for lvl 0, now we need to do the same with the next, problem is, we must only render things once
       //we have an array that removes values as it adds,  on a lvl1 with two matches we render cl1, then a match, then back to cl 1, then match, then back to cl 1, no match then begin next original
          
      }


      we have rcrusive with fallback that stop recursivness match













 currentTarget::  render originalComment cl:0 top level original with all depths of matches for the original object
                    //all renders check for their respective matches 

                    creation of:::: we must render all, then just sort it based on level and match, render date, then render all cl levels that are higher and match underneath original, this goes for the uinclduyed elements as well, callback until array fully











 we musst have a function that checks the depths of any iteration for any matches, iteration stops when all iterations are checked for matches, then top level iteration changes big page, all small iterations happen before top level root changes, it is endless match until iteration scans entire array for matches, then next iteration happens, each iteration is just a check for entire array and current id, flat array, we have current id and parentId to match---meaning we can also control by adding cl to levels, we know branch level on original root with linkage, there must be minimum one level different for bracnh to connect top level


//we need to render all links, what we have is a tree, the tree will render all big branches, but not without full detail, big tree happens, then single branch with full linkage, full linkage is first level branch sets new currentId, with new currentId we set all new linkage. then end of array, and currentId is now current Top level id, we have top level depending on level that renders, toplevel decides on intial load, then all other levels change currentId within their lesser system, top level id is top for level 1 branch, within level 1 branch repsons we change current ID, top level id and lesser levels current id, small processes reach end of array match then top level begins again from top level

 --for first branch iteration to stop we reach end of array, on end of array next map iteration happens









we want a function that finds matches for current top level iteration plus matches for its own current iterations

that means:: a function that renders a match, then it checks that current on each iteration, it must do it in depth

problem:: we have a function that calls first, then on next it checks all






 current target::  we need to call something that tests itself, I imagine two functions, we can have cl levels, on cl 0 we render all cl 1 that match, we do this on each cl 0, then we move to all cl 1, they get rendered with their repsective cl 2 target match









 we now have context from multiple levels, now RenderComments, we have permissions database link config initialize with config app levels

1. solution:: About Protected Route

In web applications, routing is the process of determining how to respond to a client request for a specific URL. In React, this is typically accomplished using the React Router library.
Write the following code in the ProtectedRoute.js file.

import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    let location = useLocation();

    if(!user.state.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;

As seen in the code above, we first import our useSelector from our react-redux package, which will allow us to access our user object that is stored on our redux.

After that, as you can see, we write some logic to check if isAuthenticated is true, and if it is, we should return the user to the Home screen if its not then the user should be Navigated to the login.
In the following section, we will wrap our protected Route module.

1. solution stop stop stop


protected route:: when signed in context is up, we then redirect to home page, otherwise redirect to login page

previousTargets:: 
1.have only exact functions:: fetchImportantdata, authDirective
2. i have removed any components i dont need, this included any objet that was not directly linked to our target functions of signing in user with protected routes and loading data from datbase, now all data is either fetch or database auth object, we have folders for each of these categories, fetchdata folder and auth folder, we hcange state at top level with useeffect for component mount, then top level state, always top level data flow, unobstructed free flow data, where update, state top level deconstruct parameters functions parenthesis

3::i have now made catch error and setstate with error, on netwrokerror we now have error return, we also have status when return, 200 ok, we have catch with same syntax also curly braces try on expressin argumensts 
function keyword can be used to defina a function inside an esxpression 

const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12



function keyword, expression constgertERecarea, function arrow syntax fedine functino expression 

const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12


Named function expression

If you want to refer to the current function inside the function body, you need to create a named function expression. This name is then local only to the function body (scope). This avoids using the deprecated arguments.callee property to call the function recursively.
js

const math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;



here we havea named function expression, with a factorial, that is factorial of something , facrtorial amthematics, product of all positive integers less than or equal to a give npostive integer denoted by that integer an an deexclamation point factorial 7!

//link:: https://www.mathnstuff.com/math/spoken/here/2class/90/binom3.htm

p (x)
n top ! count of number of ways event can occour, then x deletes duplications, proabalitily, failure probability, nm factorial, n indpendent,  n things, we have an event with event and we divide event can occour and divided by duplication  and succsesss, and failure expressed with p n x



comment level:: render all levels of comment with three different arrays, then send of rendering each level until array empty, then next array that now links all matches until array match for current level is empty, on emppty now add all //error, we do not add on end, we add values as we have each original or slightly original level, then any match renders together, each original render deserves all levels rendered from it