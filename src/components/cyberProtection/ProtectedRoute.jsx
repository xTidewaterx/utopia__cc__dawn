import { useEffect } from "react";
import { Context } from "../../App";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";

//navigate is for the component that is currently handling an event, prop drilling we have direct accses data top level, something component directly as well
//something happens after render, our Context is false despite it supposed to be true
//our context state in this component is true which is correct, on load we have natural false
//current problem:: 
//component renders before recognising that context is true
//we must render component whenver listAuthChanges renders
//when I refresh application this component does not check data and re-render to adapt to verified organism auth object database config
//our original Context wont change from here, we change state that is linked to context, other ten experiuence a different context
//function that signs in a user can be asynchronous, problem being the change of our context is asynchronous
//this component does not trigger a rerender when context changes, we have direct access to state because here we only listen to state context

export const ProtectedRoute = ({children} ) => {
  const context = useContext(Context)
  
    useEffect(()=> {
  
  
  
  
    }, [context])
  
  
      if (context[0]) {
  
        console.log(context[0])
        return <div><Navigate to="/" replace /> {children} </div>
  
    
      } 
      
      
      else {
        console.log(context)
   return <div>Protected Route Failed to Locate True Context Value <Navigate to="/signIn" replace /> {children} </div>
      }
    
  
    };