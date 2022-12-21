import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { tungstenContent,Tungsten_alloys_data} from '../../public/Data/ProductData'
const TungstenAlloysScraps = () => {
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
        link:"/Products/TungstenAlloysScraps"
    }]
  return (
    <>
    <Products data={{data_bredcrum,heading:"Tungsten Alloys Scrap",img:alloys,content:tungstenContent,table_data:Tungsten_alloys_data}}/>
    </>
  )
}

export default TungstenAlloysScraps