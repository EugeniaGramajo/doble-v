// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Slider.module.css";
  import 'swiper/css';
import { FreeMode} from "swiper";
import "swiper/css/bundle"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import PerfectScrollbar from "perfect-scrollbar";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';



export default function Slider(props) {
  const responsive = {
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
/*   useEffect(() => {
    const ps = new PerfectScrollbar("#slider", {
      suppressScrollX: true
    });
  }, []); */

  return (
/*     <div id="slider" data-aos="fade-up" className={styles.general}>
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
    <div className={styles.example}>
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
   itemClass="carousel-item-padding-40-px">
{props.images.map(img=>
 <img key={img} className={styles.img} src={img} />
  )}
    
      
    </Carousel>
  
    </div>
  );
}
