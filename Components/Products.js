import React from 'react'
import TopPages from "../Components/TopPages"
import Bredcurm from './SmallComponents/bredcurm'
import img1 from "../public/Images/contact_img.jpg"
import styles from "../styles/Products.module.css"
const Products = ({data}) => {
   console.log("data yt",data.content)
    
  return (
   <>
    <TopPages data={{heading:data.heading,img:data.img}}/>
    <div className={styles.product_container}>

    <Bredcurm data={{data_bredcrum:data.data_bredcrum}}/>
    
    <div className={styles.products_content}>

        <h3>{data.content.text1}</h3>
        <ul>
            {data.content.list.map((item,i)=>{
                return(
                    <li key={i}>{item}</li>
                )
            })}
        
        </ul>

        <h3>We Trade This type of grades</h3>
        <table>
            <thead>
                <tr>
                    <th>
                        
                    </th>
                </tr>
            </thead>
        </table>
    </div>

    </div>

   </>
  )
}

export default Products