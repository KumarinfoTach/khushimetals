import React from "react";
import Image from "next/image";
import Heading_P from "../Components/Heading_P";

import SliderHome from "../Components/SliderHome";
import styles from "../styles/Home.module.css";
import about_img from "../public/Images/about_img.jpeg";
import scrap_img from "../public/Images/img_scrap1.jpg";
import casting_img from "../public/Images/imgcasting1.jpg";
import turning_img from "../public/Images/turningimg1.jpg";
import { ProductsRangeData } from "../public/Data/DataJs";
import { OfferData } from "../public/Data/DataJs";
import img1 from "../public/Images/Icons/Img1.png"
import ProductsSlider from "../Components/ProductsSlider"
import img2 from "../public/Images/gImg_b.jpg"


const Home_main = () => {
  return (
    <>
      <SliderHome />
      <div className={`${styles.Home_about_us} pd_tb`}>
        <div className="row pd_lr">
          <div className="col-md-6">
            <div className={styles.about_left_home}>
              <h4>WELCOME TO</h4>
              <h2>Khushi Metal And Alloys</h2>
              <div className={styles.line_home}>.</div>
              <p>
                We deal into all kind of steel and alloys as per client
                requirement.
              </p>

              <Image className={styles.about_img} src={about_img}></Image>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-end">
            <div className={styles.about_content}>
              <h5>
                ​Established in the year <b>2013</b>, we, 
                <span>“Khushi Metal And Alloys”</span> are trader and wholesaler
                of Hi Nickel & Special Alloy Scraps. Offered products range
                consists of Inconel Scrap, Nicrum Spring 80/20, and Scrap 904l.
                The presented products are made by making use of supreme-grade
                material with the aid of modern machines. These products are
                known for their easy usability and low cost.
              </h5>
              <button type="button">Read More..</button>
            </div>
          </div>
        </div>

        <div className={styles.home_products_img}>
          <div className="row">
            <div className="col-md-4 pd_0 position-relative">
              <div className={styles.scrap_img}>
                <Image className={styles.img_prd} src={scrap_img}></Image>
                <dv className={styles.div_trns}></dv>
                <div className={styles.pd_details}>
                  <h3>SCRAP</h3>

                  <div>.</div>
                  <p>​We are exporter & Importer of all metal & alloy scraps</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pd_0 position-relative">
              <div className={styles.scrap_img}>
                <Image className={styles.img_prd} src={casting_img}></Image>
                <dv className={styles.div_trns}></dv>
                <div className={styles.pd_details}>
                  <h3>CASTING</h3>
                  <div>.</div>

                  <p>
                    ​We are exporter & Importer of all metal & alloy Casting
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pd_0 position-relative">
              <div className={styles.scrap_img}>
                <Image className={styles.img_prd} src={turning_img}></Image>
                <div className={styles.div_trns}></div>
                <div className={styles.pd_details}>
                  <h3>TURNING</h3>

                  <div>.</div>
                  <p>
                    ​We are exporter & Importer of all metal & alloy Turning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.products_range}>
          <Heading_P text={{ text1: "Category", text2: "OUR PRODUCTS RANGE" }} />

          <div className="row pd_lr pd_tb gap_10" >
            {ProductsRangeData.map((item, index) => {
              return (
                <div
                  className="col-12 col-md-4 col-sm-6 d-flex wh_3"
                  key={index}
                >
                  <div className={styles.products_range_box}>
                    <Image src={item.icon} alt="" />
                    <div className={styles.product_content}>
                      <h4>{item.heading}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className={styles.slide_container}>
       <Heading_P text={{ text1: "What We Do", text2: "Our Products" }} />
       {/* <ProductsSlider/> 
       </div> */}


        <div className={styles.specifications}>
        <Heading_P text={{ text1: "SPECIFICATIONS", text2: "​WHAT WE OFFER" }} />

        <div className="row pd_lr pd_tb gap_10">
          {
            OfferData.map((item,index)=>{
return(<div className="col-12 col-md-3 col-sm-6 shadow_b" key={index}>
  <div className={styles.offer_section}>
  <span><Image src={item.icon} alt="" /></span>

  <h2>{item.heading}</h2>
  <p>{item.text}</p>
    </div>
 

</div>)
            })
          }
          
        </div>

        </div>


        <div className="Globel_shiping">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image src={img2} alt="img" />
            </div>
            <div className="col-12 col-md-6">

              <div className="globals_contents">
                <h2>SHIPPING ALL OVER THE GLOBE​</h2>
                <h4>WE ARE IMPORT AND EXPORT </h4>

                <div class="line_b">.</div>
                <p>​We supply our products all over the world. Large network of Manufactures, Distributors & Suppliers around the world.</p>
                <button type="button" className="button_more">About</button>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.contact_sections}>

          <div className="row">
            <div className ="col-12 col-md-6 ">
<h2>CONTACT FOR OUR PRODUCTS TODAY</h2>
<h4>​Contact us for more information regarding our Products and alloys options, or request a quote for further pricing details today. Khushi Metals & Alloys is your trusted Scrap supplier and Exporter.</h4>
            </div>
            <div className ="col-12 col-md-6 d_flex_c " style={{"flexDirection":'column'}}>
<button className={styles.button_contact}>
  CONTACT US
</button>
           </div>
          </div>
        </div>
      
      </div>
    </>
  );
};
// laliy

export default Home_main;
