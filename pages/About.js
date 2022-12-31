import React from "react";
import Link from "next/link";
import Image from "next/image";
import TopPages from "../Components/TopPages";
import Bredcurm from "../Components/SmallComponents/bredcurm";
import styles from "../styles/about.module.css";
import img_about from "../public/Images/about_us_main.png";
import Pages_heading from "../Components/SmallComponents/Pages_heading";
import logo from "../public/Images/logo.png"
import topimg from "../public/Images/about.png"
const About = () => {
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
    <>
      <TopPages data={{heading:"About Us",img:topimg}}/>

      <div className={styles.About_container}>
      <Bredcurm data={{data_bredcrum}}/>

        <div className={styles.about_contents}>
          <div className="row">
            <div className="col-12 col-md-4">
              <h3 className="heading_about_m">About The Company</h3>
              <Image src={img_about} alt="sliderimage" />
            </div>
            <div className="col-md-8">
              <h3 className="heading_about_d">About The Company</h3>
              <p className="p_text">
                Established in the year 2013, we,{" "}
                <span>“Khushi Metal And Alloys”</span> are trader and wholesaler
                of Hi Nickel & Special Alloy Scraps. Offered products range
                ​consists of Inconel Scrap, Nicrum Spring 80/20, and Scrap 904l.
                The presented products are made by making use of supreme-grade
                material with the aid of modern machines. These products are
                known for their easy usability and low cost.
              </p>
              <p>
                ​Our mentor <span>“Mr. Lalit Modi”</span> inspires us to act
                with sincerity and believe in the trust our clients showed in
                us. Also, his visionary approachable to create a lasting
                alliance with our clientele on the basis of our honesty and
                proficiency.
              </p>
            </div>
            <div className="col-12">
              <p>
                ​We are able to famous in this domain only because of our vendor
                base; they provide quality ass​ured product range as per the
                requirements. We procured the products from the selected and
                reputed vendors only. We are dedicated to constant improvement,
                which helps us to evolve in assist to take our company on new
                heights. In addition to this, with the support of professionals
                and vendors, we are able to gain a trustworthy relationship with
                our patrons in a short span of time.
              </p>
            </div>
          </div>
        </div>
        <Pages_heading text={{ text: "fectSheet" }}/>

<div className={styles.factsheet_table}>
<table >
          
          <tbody >
            <tr >
              <td>Nature of Business</td>
              <td >Wholesale TraderCompany&nbsp;</td>
            </tr>
            <tr >
              <td > Company CEO</td>
              <td >Lalit Modi</td>
            </tr>
            <tr >
              <td >Total Number of Employees</td>
              <td >Upto 10 People</td>
            </tr>
            <tr >
              <td >Year of Establishment</td>
              <td >2013</td>
            </tr>
            <tr >
              <td >Legal Status of Firm</td>
              <td >Individual - Proprietor</td>
            </tr>
            <tr >
              <td >Annual Turnover</td>
              <td >Rs. 1 - 2 Crore</td>
            </tr>
            <tr >
              <td > Banker
              </td>
              <td >ICICI BANK LIMITED</td>
            </tr>
            <tr >
              <td >GST No.
              </td>
              <td >27BNQPS1539G1ZJ
              </td>
            </tr>
            <tr >
              <td >Payment Mode
              </td>
              <td >Cash,Credit Card,DD,Cheque
              </td>
            </tr>
            <tr >
              <td >Shipment Mode
              </td>
              <td >By Road
              </td>
            </tr>
          </tbody>
        </table>
</div>

<Pages_heading text={{ text: "WHY CHOOSE US" }}/>
       <div className={styles.about_choose}>
        <p>In order to maintain the reputation over the years, we are involved in providing supreme grade nichrome and tungsten scrap to our patrons. We are offering a large range of nichrome and tungsten scrap that are made as per quality standards at our vendor’s end.</p>
        <h3 > Some factors of our company are as follo​ws:
        </h3>
        <div className="d-flex flex-wrap">
        <ul >
          <li> Rich vendor base</li>
          <li> Client-centric approach</li>
          <li> Ethical business policy</li>
          <li>Complete client satisfaction
          </li>
        </ul>
        <ul >
          <li> Experienced professionals</li>
          <li> Timely delivery</li>
          <li> Transparent trade dealing</li>
        </ul>
        </div>
        
        <h3 > Our Vendor Base
        </h3>
        <p > As a trusted name of this industry, we are responsible to deliver the quality assured products within the committed frame of time. We source our entire product range from the authentic vendors that enable us to offer premium quality nichrome and tungsten scrap to our clients. These forged links with vendors of the market help us in attaining the nichrome and tungsten scrap of standards of quality within the promised time frame.
        </p>
       </div>
       <Pages_heading text={{ text: "Products We Offer" }}/>
       <div className={styles.products_offer}>
       <table >
          
            <tbody >
              <tr >
                <td >Hi- Nickel scrap
                </td>
                <td >Such as Inconal 600, 625, 800, 825, 904L, Monal K 400 / 500, Hast- C 22 / 276, SMO 254, Nickel &amp; Chromium Such As Ni:35% Cr:25%, Ni:45% Cr:35%, Ni Chrome scrap 80/20, Nimonic 80 Scrap (ni:75% and cr:18%) 309, 310 etc.
                </td>
              </tr>
              <tr >
                <td>Cobalt Base Alloys Scrap
                </td>
                <td >Such as SH-4, SH-6, SH-12, SH-21, SH-25, SH-31, SH-605, F-75, FSX-414, etc
                </td>
              </tr>
              <tr >
                <td >Pure Metal
                </td>
                <td >Such as Pure Nickel, Pure Molly, Pure Chromium, Pure Tungsten, Pure Mergence, Pure Cobalt, Pure Niobium, Pure Tantalum etc.
                </td>
              </tr>
              <tr >
                <td >Stainless Steel Scrap
                </td>
                <td >Stainless Steel Scrap in 200, 300 and 400 series such as: 201, 202, 304, 304L, 310, 316, 316L, 321, 410, 430, Duplex 2205, Super Duplex 2507 etc.
                </td>
              </tr>
              <tr >
                <td >Ferro Alloys
                </td>
                <td>such as Ferro Molly, Ferro Niobium, Ferro Tungsten, Ferro vanadium, Ferro mergence, Ferro chromium, L.C. chromium, L.C. mergence etc.
                </td>
              </tr>
            </tbody>
          </table>
       </div>
       <div className={styles.logo_cmp}>

       <Image src={logo} alt="sliderimage"></Image>
       </div>
      </div>
    </>
  );
};

export default About;
