application has trouble updating state and context, context being the global value, context can be provided for all components directly as an object with the method to change context, now it must be able to have these hooks alter change context when listener fires, when callback function in top level component notices the correct change it must be able to update context, problem is callback function has a problem,



we can change context with an event like a click, then a deeply nested component can change global top value for all components, 


we have callback problems when our component at the bottom of the hierarchy wants to call a method 



//current problem, how to fix global value from deeply nested components with properties and listeners 

auth with backend server 


observer on object




we can change global state from deeply nested componet, changecontext component