1:: context problem solved with deconstructed state object in child components that can now change top level state, top level state is logged into context at App.js. context is now changed from our listenauth by using a deconstructed state object sent from top level component App.js, this state object decides the context, state is given to the context provider in App.js

2:: child component deconstructed state, from app.js context now supplies us with::   const { context, setContext } = useContext(Context);  ---this deconstructed object we now harvest the properties of, logging data values with useEffect on render, setContext from child to top level truth, all back to top level source, top level, useEffect render, top level single dependecies []

3::auth context now listener updates all context in our events of database different auth object --now Listenauthchanges changes context from a nested place, we have our top level component being affected by our context change, we have conteext being altered when events of datbaase object change, we have function for and when promise returns we know if resolve- listenauthchanges component now links the top level context changer when it detects database change:::

    const authListener = () =>
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        setState(uid);
        console.log(user)
        setContext("plants are free, it is true")
      
      }   ---now we change top level context with a deconstructed object, we have the useContext hook that links to our top level despite being linked from a nested component that listens, the listener listenauthchanges component links stateful logic and changes the state of component at top level, and top level state benefits all the adversaries and knights of the land