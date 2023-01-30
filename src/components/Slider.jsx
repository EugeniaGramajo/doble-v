// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Slider.module.css";
import { FreeMode} from "swiper";
import 'swiper/swiper-bundle.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


export default function Slider(props) {
  return (
    <div  className={styles.general}
    data-aos="fade-up"
>
      <Swiper
        spaceBetween={100}
        slidesPerView={props.view}
        modules={[FreeMode]}
        loop={true}
        freeMode={true}
       
      >
        {props.images.map((img) => (
          <SwiperSlide  className={styles.swiper} key={img}>
            <img key={img} className={styles.img} src={img} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
