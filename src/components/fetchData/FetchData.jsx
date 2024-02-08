import React, { useEffect, useState } from 'react'

//use javascript fetch() method
export const FetchData = () => {
    const [state, setState] = useState([]);
    const [error, setError] = useState("")

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    
    useEffect(() => {
 
        const fetchFunction = async ()  =>{
         console.log("pear")

     
           fetch(url)
           .then((response) => {
            console.log(response.ok) //   console.log(response.ok); // returns true if the response returned //link:: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
            //response react fetch method:: 
            //Response.ok Read only
    //A boolean indicating whether the response was successful (status in the range 200 – 299) or not.
//  likely to encounter a Response object being returned as the result of another API operation
//First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers.
            return response.json();
           }) 
        
           .then((data) => {
            setState(data)
      
           }).catch(error => {
            setError(error.message)}).then(console.log(error))


 //use correct syntax for error catch, we have .to go next for this then promise resolve from async operation component async operations, now . or try on entire operation, now we tap to data flow
        }
  

         
 fetchFunction()

    }, [])


if(state.length>0) {

  return (
    <div className='app__fetchDataContainer'>
        {state.map((item) => {return <div>{item.id}</div>})}


    </div>
  )
} if(error){

  return <div>Error: {error}</div>
}

}
