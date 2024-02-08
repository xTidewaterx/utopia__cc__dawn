import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Context, userObjectContext } from '../../App'
import { ListenAuthChanges } from '../ListenAuthChanges'

export const GetContext = () => {
  const [context, setContext] = useContext(Context);

 console.log(context)
 console.log(ListenAuthChanges())

return <div>
   

   <div className='app__getContext'>
   <h1>Context GetContext: </h1> 
   {context}</div>

</div>


}


//context is now changedddd