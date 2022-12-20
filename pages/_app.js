import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../Components/Layout'
import Router from 'next/router'
import { useState } from 'react'
import Loader from '../Components/SmallComponents/Loader'



function MyApp({ Component, pageProps }) {
  const[loading,setLoading]=useState(false)
  Router.events.on('routeChangeStart',(url)=>{
    console.log("rout hangetrat")
    setLoading(true)
    document.getElementById("mobile_list").classList.add("d-none");
   
  })
  Router.events.on('routeChangeComplete',(url)=>{
    console.log("rout ompletete")
    setLoading(false)

  })
 
  return(
    <>
    {/* <Loader/> */}
    {loading && <Loader/>}
     <Layout>
    <Component {...pageProps} />
  </Layout>
    </>
   
  )
  
 
}

export default MyApp
