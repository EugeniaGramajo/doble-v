
import styles from "../styles/Slider.module.css";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Swiper ,{ FreeMode } from 'swiper';
import "swiper/css"
import "swiper/css/free-mode"

import { useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";



export default function Slider(props) {
/*   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  useEffect(() => {
    const ps = new PerfectScrollbar("#slider", {
      suppressScrollX: true
    });
  }, []);

  return (
    <div id="slider" data-aos="fade-up" className={styles.general}>
      <Swiper
        spaceBetween={0}
        slidesPerView={props.view}
        modules={[FreeMode]}
        loop={true}
        freeMode={true}
       
      >
        {props.images.map((img) => (
          <SwiperSlide id="swiper" className={styles.swiper} key={img}>
            <img key={img} className={styles.img} src={img} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div> */
 /*    <div data-aos="fade-up" className={styles.example}>
   <Carousel responsive={responsive}
   swipeable={true}
   draggable={true}
   infinite={true}
   centerMode={true}
   containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  customTransition="all .5"
  transitionDuration={500}
   autoPlaySpeed={1000}
   >
{props.images.map(img=>
 <img key={img} className={styles.img} src={img} />
  )}
    
      
    </Carousel>
  
    </div> */
    const swiperRef = useRef(null);
useEffect(() => {
  new Swiper(swiperRef.current, {
    freeMode: {
      enabled: true,
      sticky: false,
      momentumBounce:true,
    },
    slidesPerView: props.view,
    centeredSlides:true,
    allowTouchMove: true,
    spaceBetween: 20,
    loop:true,
    preloadImages: true,
    spaceBetween: 10,
    resistance:false,
    modules: [FreeMode],
  });
}, []);
    return (
      <>
  
  <div className="swiper-container" ref={swiperRef}>
    <div className="swiper-wrapper">
      {props.images.map((img)=>
      <div class="swiper-slide"> <img className={styles.img} src={img}></img> </div>)}
    </div>

  </div>
      </>
    )
}
