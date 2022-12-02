import React from "react";
import Image from "next/image";
import Heading_P from "../Components/Heading_P";

import SliderHome from "../Components/SliderHome";
import styles from "../styles/Home.module.css";
import about_img from "../public/Images/about_img.jpeg";
import scrap_img from "../public/Images/img_scrap1.jpg";
import casting_img from "../public/Images/imgcasting1.jpg";
import turning_img from "../public/Images/turningimg1.jpg";

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

        <Heading_P text={{text1:"What We Do", text2:"OUR PRODUCTS"}}/> 


        </div>

      </div>
    </>
  );
};

export default Home_main;
