this project::

we fixed set Context by having a function that returns an updated state from listening to the database auth object, then this function return value is given to a jsx component included in the range of the context provider

set  context and we have our return on event from function top level value setContext


setContext child components top level truth







sign in with firebase google technology, popup
-save data from action to context
sign out, erase context













this project logs in, then updates state on login, 


we have our component changeContext that changes the context that we import as an object












important:: use exactly the right technoology, liek now for current conection use::

import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});







get call database document snapshot, database