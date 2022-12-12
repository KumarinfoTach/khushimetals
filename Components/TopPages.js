import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img from "../public/Images/contact_img.jpg"
const TopPages = () => {
  return (
    <div className="heading_pages"  >
        <Image src={img} alt="" />
        <div className='heading_pages_text'>
        <h3>Contact US</h3>
        <div className='line_heading'></div>
        </div>
       <div className='bg_trans'></div>
        </div>
  )
}

export default TopPages