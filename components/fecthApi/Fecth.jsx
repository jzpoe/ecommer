"use client"

import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

function Fecth({ children }) {
  const [dataFetch, setDataFetch] = useState([]);
  const [producto, setProducto] = useState([]); 

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
  
    

  return <dataContext.Provider value={{dataFetch, producto, setProducto}}>{children}</dataContext.Provider>;
}

export default Fecth;
