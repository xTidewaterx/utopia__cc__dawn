import React, { useContext, useEffect } from 'react'
import { Context } from '../../App'

export const OrganismID = () => {

    const context = useContext(Context)

    

      useEffect(()=> {


console.log(context)

      }, [context])



    if(context[0]) {
        console.log(context[0][0])
        console.log(context[0][1])

        const organismObject = context[0][1];

         const {ProviderId, uid, accessToken, displayName} = organismObject;

        return (
            <div>{displayName}</div>
          )
    }


    else { //return immediately without context --there must be async, have context grow true, we have context without change because of immediate packet
console.log(context)
  
        return <div>nothing in context</div>
    }


}
