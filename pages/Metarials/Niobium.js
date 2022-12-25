import React from 'react'
import alloys from "../../public/Images/AlloysImg.jpg"
import { Niobium_data } from '../../public/Data/ProductData'
import Metarials from '../../Components/Metarials'

const Niobium = () => {
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
        name:"Niobium",
        link:"/Metarials/Niobium"
    }]
  return (
    <>
    <Metarials data={{data_bredcrum,heading:"Niobium",img:alloys,content:Niobium_data}}/>
    </>
  )
}

export default Niobium