import React, { useState,Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { Our_products_data } from "../public/Data/DataJs";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id='button_controller_next'
      style={{
        ...style,
        display:'grid',
        placeItems:'center'
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      id='button_controller_prew'
      style={{
        ...style,
        
        display:'grid',
        placeItems:'center'
      
      }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {


  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
         autoplay: true,
        className: "center",
        centerMode: true,

       
  
     
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      
  return (
    <div className="" style={{ "margin": "50px 0"}}>
 <Slider {...settings}>
        {Our_products_data.map((item,index)=>{

          
            return(
              <div key={index}>
        
              <div className={styles.card}>
                <Image src={item.img} alt=''/>
            <h3><a href="">{item.heading}</a></h3>
            <p>{item.heading}</p>
                  </div>
              </div>
             
            )
         
         
        })}
     
       
     
    </Slider>
    </div>
   
  );
      }
}