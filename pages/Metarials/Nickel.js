import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { nickel } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
const Cobalt = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Metarials",
        link:"/Metarials/Cobalt"
    },{
        id:3,
        name:"Cobalt Alloys Scrap",
        link:"/Metarials/Cobalt"
    }]
  return (
    <>
    <Metarials data={{data_bredcrum,heading:"Nickel",img:alloys,content:nickel}}/>
    </>
  )
}

export default Cobalt