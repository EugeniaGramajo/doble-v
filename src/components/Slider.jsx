// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "../styles/Slider.module.css"


// Import Swiper styles
import 'swiper/css';

export default function Slider(props) {
  return (
    <div className={styles.general}>
    <Swiper
      spaceBetween={70}
      slidesPerView={3}
      loop={true}
      className={styles.swiper}

    >

        {
            props.images.map(img=>
                <SwiperSlide key={img}><img key={img} className={styles.img} src={img}/></SwiperSlide>)
        }

    </Swiper></div>
  );
};