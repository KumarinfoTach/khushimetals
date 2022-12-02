import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from '../styles/home_main.module.css'

const SliderHome = () => {
  const onChange = (event) => {
    
  };
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const HomeSlider=[
    {
    id:1,
    img:require('../public/Images/slide1.png'),

    // heading:"we provide best Products  As per Your Requirments",
    heading:"Nickel Alloys",

    text:'We are Importer & Exporter of all type of high nickel alloy Scrap & Secondary surplus',
    // text:'We are exporter & suppliers of Welding Electrodes, Filler Wires & Flux Cored Wires',

  },
  {
    id:2,
    img:require('../public/Images/slide2.png'),
    heading:"Cobalt Alloys",
    text:'We are Importer & Exporter of all type of  Cobalt alloy Scrap & Secondary surplus',
  },
  {
    id:3,
    img:require('../public/Images/slide3.png'),

    heading:"Stainless Steel",
    text:'We are Importer & Exporter of all type of Stainless Steel Scrap,Turning & Secondary surplus',
    
  },
  {
    id:4,
    img:require('../public/Images/slide3.png'),
    heading:"Duplex&SuperDuplex",
    text:'We are Importer & Exporter of all type of Duplex And Super Duplex Scrap & Secondary surplus',
    
  },
  {
    id:5,
    img:require('../public/Images/slide4.png'),
    heading:"Titanium Scrap ",
    text:'We are Importer & Exporter of all type of high Titanium Scrap & Secondary surplus',
    
  },
  {
    id:6,
    img:require('../public/Images/slide5.jpg'),
    heading:"Tungsten Scrap ",
    text:'We are Importer & Exporter of all type of high Tungsten Scrap & Secondary surplus',
    
  }
]

  return (

  
    <div className="Slide_container">
      <div className="carousel-wrapper">
        <Carousel autoPlay="true" onChange={onChange()}>

        {HomeSlider.map((item,index)=>{
return( <div className={styles.slider_box}>
  <div className={styles.transpernt_bg}></div>
  <Image className="card-img-top img_fillter" src={item.img} alt="Card image cap" showThumbs={false} />
  <div className={styles.Home_page_heading}>

    <h1>{item.heading}</h1>
    <p>{item.text}</p>
    <div className={styles.button_group}>
    <Link  href="/contact">  <button className={styles.button_inquiry} role="button"> Inquiry now</button></Link>
    <Link  href="/contact">  <button className={styles.button_about_us} role="button"> About US</button></Link>
    </div>
    
  </div>
</div>
)
    }) }
       
        </Carousel>
      </div>
      {/* <Carousel fade style={{}}>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100 h-90"
        src={slide}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100 h-90"
        src={slide3}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100 h-90"
        src={slide4}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100"
        src={slide1}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='slideImg'>
      <img
        className="d-block w-100"
        src={slide2}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> */}
    </div>
  );
};

export default SliderHome;
