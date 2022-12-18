import React from 'react'

const Heading_P = (props) => {

   
    var text=props.text
  return (
    <div className='text-center w-100'>

<div className='heading_pr'>
            <h4>{text.text1}</h4>
            <h3>{text.text2}</h3>
            <div className='line_heading'>.</div>

          </div>
    </div>
  )
}

export default Heading_P