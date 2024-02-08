make sure to understand the data flow of the application before diving deeply, that means that state must be called only when necessary, 
-state hook, react state to React function components
-state::
useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
-with good component state all components can do wonderful things and harmonize so that all data is refreshed and targetted correctly as per the most relevant/truthful update


State: A Component's Memory

Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” should put a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.





good article about react state, link::
https://react.dev/reference/react/useState

