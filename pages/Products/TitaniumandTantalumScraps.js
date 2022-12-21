import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { TitaniumandTantalum_data,TitaniumandTantalum} from '../../public/Data/ProductData'
const CobaltAlloysScraps = () => {
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
        name:"Titanium & Tantalum Alloys Scrap",
        link:"/Products/TitaniumandTantalumScraps"
    }]
  return (
    <>
    <Products data={{data_bredcrum,heading:"Titanium & Tantalum Alloys Scrap",img:alloys,content:TitaniumandTantalum,table_data:TitaniumandTantalum_data}}/>
    </>
  )
}

export default CobaltAlloysScraps