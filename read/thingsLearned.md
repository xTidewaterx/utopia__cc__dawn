//make notes single reasonable sentence, should be understood immediately, bare language


1:: absolute imports for deeply nested imports, react, javascript, typescript
without imports become this:: ../../

2:: firebase too much recursion problem::  A recursive function is a function that calls itself repeatedly. When a condition is met, the function stops calling itself. This is called a base case. If somehow the condition does not meet then the function continues calling itself and the error occurs.
--too much recrusion, I had called a function within a variable the same as the top level function, they had an import that I called constantly, resulting in too much recursion

3::problem with context not updating was our component ListenAuthCHanges was supposed to update our components, yet it was outside of the component context provider, now context is a function because we have the deconstructed object that we can link from another component, we provide value state management, compnent highj up to a descendant ree, context provider, now have syntax for state and components The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.


4:: attack entire project, add all knowledge, instantly fill gaps when necessary, we have project, be aware of fundaments, the solid fundament, write the entirety of it properly, be safe, hold tokens close to heart, the path that leads to reincarnation --- free , 
redevelop, reform, 
ALTER, we make somethign new, we recognise what keeps our creation living, state management, have data flow, then have application alter around that core that is data flow


5:: import db firebase,  const db = getFirestore(app);


6:: async promises:: In the early days of JavaScript, callbacks were the primary mechanism for handling asynchronous operations. Callbacks are functions that get executed when an asynchronous task is complete.
promises as a solution, promises has pending as initial state, if promise is rejected it returns an error object, details about the failure,, resolved fulfi9lled pormise return to the resolved state, contains the result of the operation, such as data fetched from the server. about addDoc with firebase, this can have instant return if exact document is added with stamp of happening:: 
import { collection, addDoc } from "firebase/firestore"; 

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id);

add with docRef and id, then from that we have docRef
we have const variable that creates with our addDoc, auto ID, now we have our docRef that is an exact doc addition, without state, status on promise resolved undiefined from server, wow document we can return ffrom firebase exact idref, docref and id, doc colleciton and id collection database config file

7:: npm install react-router-dom --react router, then have components for certain router, navigation various components

8:: we now have element to be rendered, we have exact on what path, within same application:: about route for components, different paths, application with different render::::
Switch Component

When we begin to add multiple routes, we'll notice something strange.

Let's say we have a route for the home page and about page. Even though we specify two different paths, '/' and '/about', when I visit the about page we'll see both the home and the about components.

We can fix this with the exact prop, on the home route to make sure that our router matches exactly the path '/' instead of '/about':

9:: extracted protection of routes to a component that takes a boolean value/argument and children to render for value acceptance


10:: we had context from a different import, we now have a protector that returns children, parameters from jsx call top level compoennt, our component protectedRoutes returns children protected with double and children params function call in the doublle data top level component


11:: context:: context is an object, it is destructured, so Context.context is our context when it is not destructured, we now have context, and does ocntext update??

12:: context, only the place that sets our actual context has the latest state, that and the original top level component where context state is created, app.js and listenauthchanges


13:: state change, cllback parameter for set state state change,  setstate asynchronous::
The Solution

When the state is actually set can vary. Usually it happens on the next render, but it can sometimes be batched for performance. The setState function takes an optional callback parameter that can be used to make updates after the state is changed.

handleButtonClicked = evt => {
    this.setState({name: evt.currentTarget.value}, () => {
        this.props.callback(this.state.name)
    })
}

This function will get called once the state has been updated, and the callback will receive the updated value of the state.

link::  https://sentry.io/answers/forget-set-state-is-async/

14:: context is different, we create a context, and then we have state that we send as destructured objects around, this state is linked to global app top level despite many nested components attacking this state, wiht our state object sent around application levels we have updates to it from bottom level that are recognised at top level, like signIn component and that update being logged through our top level app.js --we shift between false default value and true updated value when listener fires from top level value given by destructured object to levels of components, we have destructured state with asynchronus and parameter and state, state of component, state render 

15:: state, we have state that is sent to context, top level state is also distributed towards any component level where it is used to set global state from nested components, global state is Context, context::

Context provides a way to pass data through the component tree without having to pass props down manually at every level.


16:: render corresponding, context value, link around context value top, when value top level is awaited we then have solid authentication database safety, dfatabse safety is complex api call request with certain intel, clear link different place


16:: protected route -- our porteted route is protected because it is protecting the "/" route and when we try and acsess it without context top global value then we are strictly directly redirected to our "/signIn" to creat top global value link

17:: we have a problem where our protected route is not give nthe updated context, therefore our protected route sends us right back to sign In althoug our sign in sends us to the home page

18:: we removed a redirect battle and we hnow atttack context correctly as the object and directly from top global context value , data component tree react many components application

19:: we now have context be change and navigate in one single source, we create from single route and have top level linked with state, then state in single nested component is the sourtce for nested component, nested component dribbles with state until it updates global Context and redirect will be accepted when global Context is true


20:: all is now there global context top level segragated levels, now all is good, there is a new opportunity happiness


21:: renderComments::. begin with the relationships of a comment, begin with rendering original organism, original organism then renders any organism that refers to it, this first wave of level one referrals are then sorted by date, then we have lvl 2, level 2 is just another organism referring to another organism, level 2's are rendered on top of level 1s, all level ones refer to originals, after orgiginal we have level one, referring to level one is 1 + 1 = 2, meaning level 2 is achieved referring to a level one, and all level ones refer to an original, initial empty landscape fog organism is original

22:: permissions collection database firebase ::: 


Go in Database -> Rules ->

For development:

Change allow read, write: if false; to true;

now all we set and then after then we set anotyher value when we have something happening, we have all value, now we have asynchronoyus, something happens on return, without the wait

asynchronous::
Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.



23:: a component is loading before a promise resolves, find the point of a returned promise

24::
The context object itself does not hold any information. It represents which context other components read or provide.


25:: made context an array, with two objects, true value and object value, now value update top global value from listener with top level state object destructured


26:: we have destructured exact objects, we have matches in maps, we have declared variables that are the combined amount of object iterated through with arrow function expressions, traditional function expression, 
As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.



27:: 
Basic steps of recursive programs

Every recursive program follows the same basic sequence of steps:

    Initialize the algorithm. Recursive programs often need a seed value to start with. This is accomplished either by using a parameter passed to the function or by providing a gateway function that is nonrecursive but that sets up the seed values for the recursive calculation.
    Check to see whether the current value(s) being processed match the base case. If so, process and return the value.
    Redefine the answer in terms of a smaller or simpler sub-problem or sub-problems.
    Run the algorithm on the sub-problem.
    Combine the results in the formulation of the answer.
    Return the results.


// we have nodes, top node, and then many nodes can  point to top node, whereas top node is a single netitiy, in theory, there can be endless pointers to top node, and each node until cl2 can have levels pointing endlessly to them, whereas a cl2 links to a cl one rather than the original single entity


28::

    //now function is alive, there is a callback until we reach our destined lvl, level can als o be found dynamically searching entire array


callback function mustt stop , we have a callback that renders, we have complexity, yet all we are chasing is order,
28.1:: we need to render so that we compartmentalize values, all values for first original, then all values for second original, avoid any rerenders of values that was matched early, we sort values by their tree structure, last render avoids bottom early branches, then we have a clear render with exact targets, targets that saved for each link instead of refreshing all values on a random unstructured array



29::: attack them all, become big, a world awaits

30:: we set our state after call ended, we set from an array that updates, we have array, there is an entire array, within async we have something happening, async function



31:: all good code is in its own compartement, all in single value cmopartement


31:: async return function, async function return a promise, we must await this promise in an async enviroment

32:: we now have async return value, the promise is instantly returned , remember a promise must be awaited, await for a promise to resolve , promise-based behaviour

asyncfunction object
asyunc function returns a new promise which will be resolved with the value returned by the async function or rejected with an exception uncaught within the async function, async function await expression,  await expressions make promise-returning function behave as though they're sycnryhonous byb supsending execution

asynchronus is to not bother the rest of the function, however, with top level stat render we take control of application from string value to array value, clear change, we can use await expression to have async function become sycnrhonus function waiting for the same process, suspend activity until promise is fulfilled or reject3ed, resolved value of the promise treated as the return value of the await expressions, async await enable the use of try catch block around async code

Description

An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.



24:: coding, recursivness, always have the right call to retreat all code on certain event, you want certain data, edlesss data is hurtfull, have condition and power::


  if(!arrayComplete) {
collectionArray= [...collectionArray, doc.data()]
console.log("collectionArray", collectionArray)
  }

  we render all of it...spread before we hit exact same value as created meaning now all unqiue value have met



  26:: destructured have single object jsx element , async always await a promise


  27:: jsx element param in function holds all jsx params, we now have child parent change  we have entire array

  export const Reply = (organismObject) => {

  const [inputValue, setInputValue] = useState("");

  const { ID, cl, comment, name, organismDisplayName, uid, parentId } =
    organismObject?.organismObject ? organismObject?.organismObject : {};

    //parent state ,now on new reply parentState is now changed, true false, when added data succsessful
   // A successful request will be indicated by a 200 OK HTTP status code, and the response will contain the data we're retrieving. 
useEffect(()=> {


console.log(organismObject.stateValue)
organismObject.stateValue?.setState( [


  we have our params, then from child to parent, we can have set state deciding on our react, we can do it by checking, still we have it directly on call being made anyways we change state, we only have child component call function on render, this is onclick render, event singular, avoid endless, we now have object destructured, m state, and successful request indicated by http status code response contain data



  28::  syuccsessful now we have data given instantly on reply, we have array altered with spread and only on succsessful return we now have doc ref exact from datbaase id
  
  on succsessful call data link database, now we have re-render::: we alter state to change on top, only thing is we want , we want data object to freeze when reply is clicked and then have this reply be the same version, when we adddata we set an object as state, same object be used for top level send, we have object, almost same, it is on the succsessful we render and give it, same function within same organism range- -- - -- we have our data array spread and new value, we 


  29:;: use same id in object properties when you map through object so you can reach actualy database document items objects , we have on upload our do id, and set it for our object same reach database inside map object


  30:: async function promise resolve now we have our addDoc and asyncronous means that we disregard any operation, yet we do await

  await syntax, await keyword used inside async function pause 
  await makes the function pause and wait for a resolved promsie, we update id, same, and then we can refercnce id, id from map


  31:: ALL PERFECT, NOW WE HVAE THE TOP LEVEL STATE, WE HAVE ALL FOLLOWING THIS BEATIFUL AERIAL AWARENESS, NOW TOP LEVEL AND WITHOUT MESS ERRORS, NOW ALL DIRECT LINK WITH CRYSTAL LINKS

  32:: find difference react state creation:: 
  UI should look like, based on the current application state.

React plays a “find the differences” game to figure out what's changed between these two snapshots. In this case, it sees that our paragraph has a text node that changed from 0 to 1, and so it edits the text node to match the snapshot. Satisfied that its work is done, React settles back and waits for the next state change.

react state change mutate state array, now top level source crystal truth, fields harvest, marshes


32:: folder structure is alright, categories lead me quickly to the correct path, we have a central state from dataRender, avoids rednering all, we know have okay datastructure and state management, and secure route depndant on rendering only if secret uid is registered


33::: have div container and apply display contents, then within some are block meaning they stack differently