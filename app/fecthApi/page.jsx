"use client"

import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

function FetchApi({ children }) {
  const [dataFetch, setDataFetch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setDataFetch(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      
    };
    fetchData();
  }, [])
  
    

  return <dataContext.Provider value={{dataFetch}}>{children}</dataContext.Provider>;
}

export default FetchApi;
