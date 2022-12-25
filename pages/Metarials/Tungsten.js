import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { Tungsten_data  } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
const Tungsten = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Metarials",
        link:"/Metarials/Tungsten"
    },{
        id:3,
        name:"Tungsten",
        link:"/Metarials/Tungsten"
    }]
  return (
    <>
    <Metarials data={{data_bredcrum,heading:"Tungsten",img:alloys,content:Tungsten_data}}/>
    </>
  )
}

export default Tungsten