import React from 'react'
import { Footer } from './Footer'
import Header from './Header'
import ScrollButton from '../Components/SmallComponents/ScrollTop'
const Layout = ({ children }) => {
  return (
   <>
   <Header/>
   {children}
  <ScrollButton/>
   <Footer/>
   </>
  )
}

export default Layout