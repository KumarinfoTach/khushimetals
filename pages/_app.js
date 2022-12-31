import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../Components/Layout'
import Router from 'next/router'
import { useState,useEffect } from 'react'
import Loader from '../Components/SmallComponents/Loader'



function MyApp({ Component, pageProps }) {
  const[loading,setLoading]=useState(true)
  Router.events.on('routeChangeStart',(url)=>{

    setLoading(true)
    document.getElementById("mobile_list").classList.add("d_none_m");
   
  })
  Router.events.on('routeChangeComplete',(url)=>{
  
    setLoading(false)

  })
useEffect(()=>{
  setLoading(false)
},[])
 
  return(
    <>
    {/* <Loader/> */}
    {loading?<Loader/>:
    <Layout>
    <Component {...pageProps} />
  </Layout>
    }
     
    </>
   
  )
  
 
}

export default MyApp
