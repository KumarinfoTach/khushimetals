import React from 'react'
import Link from 'next/link'
import { BsChevronDoubleRight } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";



const Bredcurm = ({data}) => {

 
  return (
    <div className='bredcrum'>
    <div className='link_sbredcrum'>
    {data.data_bredcrum.map((item,index)=>{
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