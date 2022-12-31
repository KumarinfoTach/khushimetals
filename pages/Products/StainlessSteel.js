import React from 'react'
import Products from '../../Components/Products'
import alloys from "../../public/Images/AlloysImg.jpg"
import {Stainless_Steel_Content,stainless_steel_data} from '../../public/Data/ProductData'
const StainlessSteel = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"Products",
        link:"/Products/StainlessSteel"
    },{
        id:3,
        name:"Cobalt Alloys Scrap",
        link:"/Products/StainlessSteel"
    }]
  return (
    <>
    <Products data={{data_bredcrum,heading:"Stainless Steel Scrap",img:alloys,content:Stainless_Steel_Content,table_data:stainless_steel_data}}/>
    </>
  )
}

export default StainlessSteel