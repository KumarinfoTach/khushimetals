import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { nickelContent,Nickel_Alloy_data,Nickel_Alloy_2nd_data} from '../../public/Data/ProductData'
const NickelAlloysScraps = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Products",
        link:"/Products/CobaltAlloysScraps"
    },{
        id:3,
        name:"Nickel Alloys Scrap",
        link:"/Products/NickelAlloysScraps"
    }]
  return (
    <>
    <Products data={{data_bredcrum,heading:"Nickel Alloys Scrap",img:alloys,content:nickelContent,table_data:Nickel_Alloy_data,table_data1:Nickel_Alloy_2nd_data}}/>
    </>
  )
}

export default NickelAlloysScraps