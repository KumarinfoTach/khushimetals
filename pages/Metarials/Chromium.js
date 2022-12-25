import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { Chromium_data } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
const Chromium = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Metarials",
        link:"/Metarials/Chromium"
    },{
        id:3,
        name:"Chromium",
        link:"/Metarials/Chromium"
    }]
  return (
    <>
    <Metarials data={{data_bredcrum,heading:"Chromium",img:alloys,content:Chromium_data}}/>
    </>
  )
}

export default Chromium