import React from 'react'
import Image from "next/image";

import loaderimg from "../../public/Images/loader.gif"
const Loader = () => {
  return (
    <div className='loader'>
        <span>Loading...</span>
<Image src={loaderimg} alt="loader"></Image>

    </div>
  )
}

export default Loader