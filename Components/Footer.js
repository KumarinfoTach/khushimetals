import React from 'react'
import Link from 'next/link'
import { FaWhatsapp,FaInstagram,FaLinkedinIn,FaTwitter,FaAngleRight } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="footer_section">
      <div className="footer_container">
        <div className="row nav_footer">
          <div className="col-md-3 col-12 col-sm-6 about_footer d-flex flex-column align-items-center">
            <h3>About</h3>
            <p>
              We would like to introduce ourselves as a one of the leading
              Importer & Stockiest of all kind of Nickel Base Alloy, Titanium
              Alloys, Cobalt Alloys,Stainless Steel Scrap Suppliers in India. We
              can offer you all the material Ex-Stock Mumbai at most Competitive
              rates & with Batch Test Certificate.
            </p>
            {/* <p>
          We would like to introduce ourselves as a one of the leading Importer & Stockiest of all kind of Nickel Base Alloy, Titanium Alloys, etc in Sheets, Plates, Coils, Strips, Pipes & Tubes, Round Bars, Square Bars, Hex Bars, Circle, Filler Wires, Welding Electrodes etc in India. We can offer you all the material Ex-Stock Mumbai at most Competitive rates & with Batch Test Certificate.
          </p> */}
          </div>
          <div className="col-md-3 col-12 col-sm-6 d-flex flex-column align-items-center">
            <h3>Quick links</h3>
            <div className="quick_link d-flex flex-column ">
              <Link href="/">
                {" "}
                <FaAngleRight />
                Home
              </Link>
              <Link href="/about">
                {" "}
                <FaAngleRight />
                AboutUs
              </Link>
              <Link href="/productModi">
                <FaAngleRight />
                Products
              </Link>

              <Link href="/products">
                {" "}
                <FaAngleRight />
                Metarials
              </Link>
              {/* <Link href="/gallery" > 
            
             <i class="fa-solid fa-angle-right text-white mx-2"></i>Gallery </Link> */}
              <Link href="/contact">
                {" "}
                <FaAngleRight />
                Contact Us
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-12 col-sm-6 d-flex flex-column align-items-center ">
            <h3>Hot products</h3>
            <div className="quick_link d-flex flex-column ">
              <Link href="/Products/CobaltAlloysScraps">
                {" "}
                <FaAngleRight />
                Cobalt Alloys Scrap
              </Link>
              <Link href="/Products/NickelAlloysScraps">
                {" "}
                <FaAngleRight />
                Nickel Alloys Scrap
              </Link>
              <Link href="/Products/TungstenAlloysScraps">
                {" "}
                <FaAngleRight />
                Tungsten Alloys Scrap
              </Link>
              <Link href="/Products/TitaniumandTantalumScraps">
                {" "}
                <FaAngleRight /> Titanium & Tantalum Scrap
              </Link>

              <Link href="/Products/StainlessSteelScraps">
                {" "}
                <FaAngleRight />
                Stainless Steel Scraps{" "}
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-12 col-sm-6 text-center">
            <h3>News Letter</h3>
            <div className="news_letter d-flex flex-column align-items-center justify-content-start">
              <h6>
                Subscribe to our newsletter and stay up to date on our latest
                releases and promotions!
              </h6>
              <div className="news_email">
                <input
                  type="email"
                  className="input_email"
                  placeholder="Enter Email Address"
                />
                <a to="#">GO</a>
              </div>
              <style jsx>{`
                .footer_social i {
                  padding: 12px;
                  border-radius: 50%;
                  background: rgba(0, 0, 0, 0.54);
                  color: #00b274;
                  margin: 5px;
                  font-size: 1.9rem;
                  cursor: pointer;
                  transition: all 0.5s;
                }
                .footer_social i:hover {
                  transform: scale(0.8);
                  color: #e3b71b;
                }
                .company_status h4 {
                  font-weight: 400;
                  font-size: 2rem;

                  /* identical to box height */

                  color: #00b274;
                }
              `}</style>
              <div className="stay_tuch">
                <h4>STAY IN TOUCH</h4>
                <div className="footer_social">
                  {/* <i class="fa-brands fa-facebook-f"></i> */}
                  <div className="links_s">
                    <a href="https://wa.me/+918291870720" target="_blank">
                      {" "}
                      <span class="">
                        <FaWhatsapp />
                      </span>
                    </a>
                  </div>
                  <div className="links_s">
                    <a href="#" target="_blank">
                      {" "}
                      <span>
                        <FaInstagram />
                      </span>
                    </a>
                  </div>
                  <div className="links_s">
                    <a href="#" target="_blank">
                      {" "}
                      <span class="">
                        <FaLinkedinIn />
                      </span>
                    </a>
                  </div>
                  <div className="links_s">
                    <a href="#" className="" target="_blank">
                      {" "}
                      <span class="">
                        <FaTwitter />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="company_status text-center">
          <h4>AN ISO 9001:2015 CERTIFED COMPANY</h4>
          <h5>Mfrs, Importers, Stockist & Suppliers of :</h5>
          <p>
            {" "}
            Stainless Steel , Inconel , Monel , Nickal,Cobalt , Nitinol ,
            Titanium , Nitronic , Hastelloy , Nimonic , Super Duplex , Alloys
            Steel , Carban Steel, Industrial Raw
          </p>
        </div>
        <div className="bottom_line"></div>
        <div className="copy_right text-center">
          <h4>
            © {new Date().getFullYear()} Khushi Metal & Alloys. All Rights
            Reserved. Privacy Policy
          </h4>
          <h5>
            DESIGN AND DEVELOPED BY{" "}
            <a
              href="https://www.linkedin.com/in/lalit-kumar-845a2123a"
              target="_blank"
            >
              {" "}
              LALIT KUMAR{" "}
            </a>
          </h5>
        </div>
      </div>
    </section>
  );
}
