import React, { useEffect, useState } from 'react'
import { createContext } from 'react';
let ApiData = createContext()
import axios from 'axios';
  
    const Contextapi = ({children}) => {
        let [info , setInfo] = useState([])
        let [loading , setLoading] = useState(true);
        let getData = ()=>{
         axios.get("https://dummyjson.com/products").then((responce)=>{
            setInfo(responce.data.products)
            setLoading(false);
         })
        }
        useEffect(()=>{
            getData()
        },[])
  return (
   <ApiData.Provider value={{ info , loading}}>
    {children}
   </ApiData.Provider>
  )
}
export {Contextapi , ApiData}