import React from 'react'


export const RenderProfile = (uid) => {


  if(uid) {

    return (
      <div>RenderProfile uid: {uid.uid}</div>
    )

  }
  else {

    return <div>nop profile was found</div>
  }


}
