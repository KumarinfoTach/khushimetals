import React from 'react'
import Link from 'next/link'
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";



const Bredcurm = () => {
    const data_bredcrum =[{
        id:1,
        name:"Home",
        link:"/"
    },{
        id:2,
        name:"About",
        link:"/About"
    }]
  return (
    <div className='bredcrum'>
    <div className='link_sbredcrum'>
    {data_bredcrum.map((item,index)=>{
    return(
        <Link href={item.link} key={index}>{item.name} <span><FaAngleDoubleRight/></span></Link>
    )
})}
    </div>

<div className='line_bred'>

</div>
       
    </div>
  )
}

export default Bredcurm