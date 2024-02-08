import React, { useState } from 'react'
import { useContext } from 'react'
import { Context} from '../App'
import { useEffect } from 'react';

//we provide an object of the functions we need, different values fit in an object for data requests



//this must be within a certain scope to have context acsess
export function ChangeContext  ()  {
  const [context, setContext] = useContext(Context);

   console.log(context)


   return <button onClick={() => setContext("New Value")}> context: {context} </button>

//call state limited sideEffect after render, dependencies array  

 //our context that we send through our application is an object with context value and context changer tool




}
