import React,{ useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";

 const Carousel2 = ({data}) => {
  
    const propsData=data.slideData
   const [currentSlide, setCurrentSlide] = useState(0);
   const [loaded, setLoaded] = useState(false);
   const [sliderRef, instanceRef] = useKeenSlider({
     initial: 0,

     slideChanged(slider) {
       setCurrentSlide(slider.track.details.rel);
     },
     created() {
       setLoaded(true);
     },
     spacing: 10,
     slides: { perView: 1 },
     centered: false,
     loop: true,
     mode: "snap",
     breakpoints: {
       "(min-width: 550px)": {
        slides: { perView: 1, spacing: 10 },
         mode: "free-snap"
       },
       "(min-width: 850px)": {
         slidesPerView: 2,
         mode: "free-snap"
       },
       "(min-width: 1150px)": {
        slides: { perView: 4, spacing: 10 },
         mode: "free-snap"
       },
       "(min-width: 1350px)": {
        slides: { perView: 4, spacing: 10 },
         mode: "free-snap"
       },
       "(min-width: 1650px)": {
        slides: { perView: 6, spacing: 10 },
         mode: "free-snap"
       }
     }
   });

   return (
     <>
       <div className="navigation-wrapper">
         <div ref={sliderRef} className="keen-slider">
{propsData.map((item,index)=>{
    return(
        <div className="keen-slider__slide number-slide1">
      
        <div className="Slide_r">
        <Image src={item.img}></Image>
        <h5>{item.heading}</h5>
        </div>
      </div>

    )
})}
        
         </div>
         {loaded && instanceRef.current && (
           <>
             <Arrow
               left
               onClick={(e) =>
                 e.stopPropagation() || instanceRef.current?.prev()
               }
               disabled={currentSlide === 0}
             />

             <Arrow
               onClick={(e) =>
                 e.stopPropagation() || instanceRef.current?.next()
               }
               disabled={
                 currentSlide ===
                 instanceRef.current.track.details.slides.length - 1
               }
             />
           </>
         )}
       </div>
       {loaded && instanceRef.current && (
         <div className="dots">
           {[
             ...Array(instanceRef.current.track.details.slides.length).keys(),
           ].map((idx) => {
             return (
               <button
                 key={idx}
                 onClick={() => {
                   instanceRef.current?.moveToIdx(idx);
                 }}
                 className={"dot" + (currentSlide === idx ? " active" : "")}
               ></button>
             );
           })}
         </div>
       )}
     </>
   );
 };

 function Arrow(props) {
   const disabeld = props.disabled ? " arrow--disabled" : "";
   return (
     <svg
       onClick={props.onClick}
       className={`arrow ${
         props.left ? "arrow--left" : "arrow--right"
       } ${disabeld}`}
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
     >
       {props.left && (
         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
       )}
       {!props.left && (
         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
       )}
     </svg>
   );
 }
export default Carousel2
