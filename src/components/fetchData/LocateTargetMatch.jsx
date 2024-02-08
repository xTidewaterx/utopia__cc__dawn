import React from 'react'


//if all IDs unique, based on period, then any match must be unique
function LocateTargetMatch(param1, param2) {

    //we need array and an id to search for array match, meaning current rendered comment id vs targetId/parentId in the array
 
    const  [{ID, ...others}]= param1.map((data)=>data);
    const arrayMap = param1.map((data)=>data)
 console.log(arrayMap)
 console.log(ID, others) //always logs the initial object, it is destructure object, not all objects, what to do is map array and send single objects for destrucutring multiple, we need exact object to destructure since it is exact, value from sourced variable
 //destructure ojbect is to destructure the properties that are original for single object
 //in a big function we can deconstruct all the properties of every mapped object, then it is exact objects and each object is targetted with destructured properties curly square
 //square more of exact

console.log(param1)
return param1.map((data)=> {

    const {parentId, comment, accessToken} = data;

console.log(data.parentId)

    if(data.parentId==param2) {console.log(data.parentId)
        
        return <div>current ID: "{param2}" found match with parentId: "{parentId}". Branch link created from comment: {comment}</div>} 
    
})
 

}

export default LocateTargetMatch