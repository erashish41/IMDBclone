// we don't show any Component in context file, we are using this only to pass the date. its like warehouse

import React from "react";
const AppContext = React.createContext();

// we need Provider function to take it global and after that we have to Wrap it in Index.js file
const AppProvider = ({children}) =>{
    return <AppContext.Provider value= "Ashish">{children}</AppContext.Provider>
}

export {AppContext, AppProvider}

