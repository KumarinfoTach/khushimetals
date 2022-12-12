import React from 'react'

const Pages_heading = (props) => {
    var text=props.text.text
  return (
    <div className='topic_heading'>

        <h4>{text}</h4>
        <div className='line_topic'>

        </div>

    </div>
  )
}

export default Pages_heading