import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [list,setList] = useState([]);
  const [searchTerm,setSearchTerm] = useState('avengers')
  const [error,setError] = useState(null);
  const handleSubmit = async() =>{
    try {
      const finalURL = `${API_ENDPOINT}&s=${searchTerm}`
      const response = await fetch(finalURL);
      const list = await response.json();
      if(list.Response === 'True'){
        setError(null);
        setList(list);
      }
      else
        setError(list.Error)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    setLoading(true);
    handleSubmit();
    setLoading(false);
  },[searchTerm])
  return <AppContext.Provider value={{loading,list,searchTerm,error,setSearchTerm,setLoading}}>{children}</AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }