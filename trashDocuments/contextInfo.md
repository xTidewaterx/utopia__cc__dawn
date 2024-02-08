







cotnext is global, it is provided in the jsx list with the provider wrapping around, there migth be able to return some value, there is a callback, how can any of these values expand to the outsides, state can only be called in the body of a function cpomponent



To avoid confusion, it’s not supported to call Hooks in other cases:

    🔴 Do not call Hooks in class components.
    🔴 Do not call in event handlers.
    🔴 Do not call Hooks inside functions passed to useMemo, useReducer, or useEffect.

    function Counter() {
  // ✅ Good: top-level in a function component  const [count, setCount] = useState(0);  // ...
}

function useWindowWidth() {
  // ✅ Good: top-level in a custom Hook  const [width, setWidth] = useState(window.innerWidth);  // ...
}

If you brea




react context info::: we must create intel that moves between components to help target different purposes
 link: :https://dmitripavlutin.com/react-context-and-usecontext/

-we create a context:: 
export const userObjectContext = createContext("context value");

--now we must change context





we have the context provider that reveals a const link, link to our const value that is linked to our state, when log out we change state and vola we have top level context changed


our component GetContext uses true data refresh from database linked to our top component, top component sends data without gravity like this::


value is top level state to ensure top level true data so that original source is always true, true data reigns beauty for us to follow and adapt to something that creates our world

<userObjectContext.Provider value={value}>

<GetContext/>
</userObjectContext.Provider>





important:: do all components that use context update if context is changed?

important 2:: can I change the value of top level context from a distant component?






we have problem setContext is not a function



export default function App() {
  const [context, setContext] = useState("default context value");
  return (
    <Context.Provider value={[context, setContext]}>
      <ComponentA />
      <ComponentB />
    </Context.Provider>
  );
}


set context set change values of context in child components::

export default function App() {
  const [context, setContext] = useState("default context value");
  return (
    <Context.Provider value={[context, setContext]}>
      <ComponentA />
      <ComponentB />
    </Context.Provider>
  );
}


3- Consume and set/change value of the context in child components.

//ComponentA.js

import React, { useContext } from "react";
import { Context } from "./Context";

export default function ComponentA() {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      ComponentA:
      <button onClick={() => setContext("New Value")}>
        Change Context Value
      </button>
    </div>
  );
}

context comes from our ./Context and different components change context so that the original source is different for each component:_: 


import React, { useContext } from "react";
import { Context } from "./Context";

setContext muist have the change value