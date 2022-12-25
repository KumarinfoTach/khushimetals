import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { Tantalum_data } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
const Tuntalum = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Metarials",
        link:"/Metarials/Niobium"
    },{
        id:3,
        name:"Tuntalum",
        link:"/Metarials/Tuntalum"
    }]
  return (
    <>
    <Metarials data={{data_bredcrum,heading:"Tuntalum",img:alloys,content:Tantalum_data}}/>
    </>
  )
}

export default Tuntalum