import styles from "../styles/Slider.module.css";
import 'react-multi-carousel/lib/styles.css';
import Swiper, { FreeMode } from 'swiper';
import "swiper/css"
import "swiper/css/free-mode"
import { useEffect, useRef } from "react";

export default function Slider(props) {
  const swiperRef = useRef(null);
  useEffect(() => {
    new Swiper(swiperRef.current, {
      freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: true,
      },
      slidesPerView: props.view,
      centeredSlides: true,
      allowTouchMove: true,
      spaceBetween: 20,
      loop: true,
      preloadImages: true,
      spaceBetween: 10,
      resistance: false,
      modules: [FreeMode],
    });
  }, []);
  return (
    <>
      <div data-aos="zoom-out" className={styles.general}>
        <div className="swiper-container" ref={swiperRef}>
          <div className="swiper-wrapper">
            {props.images.map((img) =>
              <div class="swiper-slide">
                <img className={styles.img} src={img}></img>
              </div>)}
          </div>
        </div>
      </div>
    </>
  )
}
