import React from "react";
import Slider from "./Slider";
import styles from "../styles/Projects.module.css"
import {images} from "../Data/proyectos"

export default function Projets(){
    return (
        <>
        <div className={styles.div}>
        <h2>ULTIMOS TRABAJOS</h2>
        <Slider images={images}></Slider>
        </div>
        </>
    )
}