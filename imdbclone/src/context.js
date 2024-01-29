// we don't show any Component in context file, we are using this only to pass the data,  its like warehouse

import React, {useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=1b9b67e1&s=titanic`;

const AppContext = React.createContext();

// we need Provider function to take it global and after that we have to Wrap it in Index.js file
const AppProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState (true);
    const [movie, setMovie] = useState ([]);
    const[isError, setIsError] = useState ({show: "false", msg: "" });

    const getMovies = async (url) =>{
        try {
            const res = await fetch (url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading (false);
                setMovie(data.Search);
            }else{
                setIsError({
                    show: true,
                    msg: data.error,
                });
            }

        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies (API_URL);
    }, []);

    return <AppContext.Provider value = {{movie, isLoading, isError}}>
            {children}
        </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext (AppContext);
};

export {AppContext, AppProvider, useGlobalContext}

