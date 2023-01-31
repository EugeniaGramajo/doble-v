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



export default function Slider(props) {
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

    </div>
  );
}
