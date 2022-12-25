import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { Molybdenum_data } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'
const Molybdenum = () => {

    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Metarials",
        link:"/Metarials/Molybdenum"
    },{
        id:3,
        name:"Molybdenum",
        link:"/Metarials/Molybdenum"
    }]
  return (
    <>
    <Metarials data={{data_bredcrum,heading:"Molybdenum",img:alloys,content:Molybdenum_data}}/>
    </>
  )
}



export default Molybdenum