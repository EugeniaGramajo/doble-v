import React from "react";
import Slider from "./Slider";
import styles from "../styles/Projects.module.css"
import {images} from "../Data/proyectos"
import Media from "react-media";

export default function Projets(){
    return (
        <>
        <div id="proyectos" className={styles.div}>
        <h2>ULTIMOS TRABAJOS</h2>
        <Media query="(min-width:500px)">
            {matches=>matches? "" : <Slider images={images} view={2}></Slider> }
        </Media>
        <Media query="(min-width:500px)">
            {matches=>matches?  <Slider images={images} view={3}></Slider>  : ""}
        </Media>
        
        </div>
        </>
    )
}