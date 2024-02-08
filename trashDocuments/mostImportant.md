answer
how can we send value when observer on object fires from changes on object
we want to send value globally, and hooks within callbacks (function that fires a function on certain event). We want to get value from callback connection, because of its preciseness, then we want to share to top, have it spread globally in app

answer stop stop

callback::
In React, the purpose of callback function as an argument of setState event is to execute the code after the data in the state is modified.


A callback happens when an activity or event takes place within an app.
context problem, we can setState in the callback of our GoogleSign in functino, yet only when that function resides within our top component, when we import the function we have a problem


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




we must keep hooks from rerendering application, have state limited in a useEffect hook, avoid callback with hook, body of component, what is it


keep context devourers within context system provision 



