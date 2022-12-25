import React from 'react'
import TopPages from "../Components/TopPages"
import Bredcurm from './SmallComponents/bredcurm'
import styles from "../styles/Products.module.css"

const Metarials = ({data}) => {
  console.log(data,"data")

  var data_key=Object.keys(data.content)
  return (
    <>
    <TopPages data={{heading:data.heading,img:data.img}}/>
   
 

    <div className={styles.materials_content }>
    <Bredcurm data={{data_bredcrum:data.data_bredcrum}}/>
     <h2>{data.heading}</h2>
     {
      data_key.map((item)=>{
        return(
          <p>{data.content[item]}</p>
        )
      })
     }

    </div>
    </>
  )
}

export default Metarials