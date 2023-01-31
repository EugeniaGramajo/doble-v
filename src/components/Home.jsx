import React from "react";
import Media from "react-media";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Media query="(max-width:500px)">
        {(matches) =>
          matches ? (
            <img
              data-aos="flip-up"
              className={styles.img1}
              src="./banner1.png"
            />
          ) : (
            <img data-aos="flip-up" className={styles.img} src="./banner.png" />
          )
        }
      </Media>
    </>
  );
}
