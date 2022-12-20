import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import { Cobaltalloys_data ,cobaltContent} from '../../public/Data/ProductData'
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
        name:"Cobalt Alloys Scrap",
        link:"/Products/CobaltAlloysScraps"
    }]
  return (
    <>
    <Products data={{data_bredcrum,heading:"Cobalt Alloys Scrap",img:alloys,content:cobaltContent,table_data:Cobaltalloys_data}}/>
    </>
  )
}

export default CobaltAlloysScraps