now we have listener on all events database changes snapshot 
we have value of beforre and after, then 
we change values from top component, now all have top level origin, we have created the structure of dreams, top lev el free flaotin river clear origin
link::
https://dev.to/efearas/how-to-usecontext-and-set-value-of-context-in-child-components-in-3-steps-3j9h



object top level clear origin

all we have to do is change the context in deeply nested components, then we have our parent component react to these,
our listener can change the state of our top component

now listener can change 

context:: we now have global con0text changed from deeply nested components, we send context function and data values from top level conmpoennt trhough an object apram value props, we have vlaue with variables parenthesis now with global value, then we have () => {}

global 

global values component
context now object function to deeply nested components


{value, otherValue}






multiple deeply nested components 

now changed from a deeply nested origin



example firebase javascript SDK::
To handle the sign-in flow with the Firebase JavaScript SDK, follow these steps:

    Create an instance of the Google provider object:
    Web modular API
    Web namespaced API
    Learn more about the tree-shakeable modular Web API and upgrade from the namespaced API.

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();





a truth cannot be different, therefore we must originate our most important necessary global values from the original true source at the summit of our project



i have a problem
-the problem is that we have a listener in a component in the components folder, this listener fires correctly on sign out, but it does not awaken our top component, because if it did our top component would change its top state value

--solution::
we have our top level component have all of the force on top, where do you change context from?

we must have data that is true, top level component is the original source, this must update all other sources, therefore all updates of database (our true source) must rinse through here  


The corresponding <Context.Provider> needs to be above the component doing the useContext() call. React automatically re-renders all the children that use a particular context starting from the provider that receives a different value .


context provider has the prupose to provide the bottom with the top level context, therefore we change context from top, and this top level is now the newest data from database because we have top level true data








copy of our app function that listens and changes the state that makes up our context::



 
    onAuthStateChanged(auth, (user) => {if (user) {
        //listener observer auth object
    //link context to this onstatehcange, when state change context change, technology link current organism with listener firebase    
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
    
            console.log(uid)
    
        
     
           setSignInState(uid)
    //each refresh get current auth get link created for link when post request
        // ...
      } else {
        // User is signed out
    
    
        
      console.log("signed out")

        // ...
      }
    }) 