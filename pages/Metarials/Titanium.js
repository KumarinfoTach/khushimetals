import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { TitaniumandTantalum  } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
const Titanium = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Metarials",
        link:"/Metarials/Titanium"
    },{
        id:3,
        name:"Titanium",
        link:"/Metarials/Titanium"
    }]
  return (
    <>
    <Metarials data={{data_bredcrum,heading:"Titanium",img:alloys,content:TitaniumandTantalum}}/>
    </>
  )
}

export default Titanium