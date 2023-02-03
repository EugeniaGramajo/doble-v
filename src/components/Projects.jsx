import React from "react";
import Slider from "./Slider";
import styles from "../styles/Projects.module.css";
import { images } from "../Data/proyectos";
import Media from "react-media";
export default function Projets() {
  return (
    <>
      <div id="proyectos" className={styles.div}>
        <h2>ULTIMOS TRABAJOS</h2>
        <Media query="(min-width:500px)">
          {(matches) =>
            matches ? (<div><Slider sb={150}
              images={images}
              view={3}>
            </Slider>
              <Slider
                images={images}
                view={3}
                sb={144}>
              </Slider>
            </div>) : <Slider sb={0} images={images} view={1}></Slider>}
        </Media>
      </div>
    </>
  );
}
