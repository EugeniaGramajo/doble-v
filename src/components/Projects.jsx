import React from "react"
import styles from "../styles/Projects.module.css"
import {images}from "../Data/proyectos"

export default function Projects(){
 
 const quantity = images.length

    

    return(
        <>  
            <div id="proyectos" className={styles.div}>
        <h2>Trabajos realizados</h2>
        <div className={styles.container}>

        {images.map(img=>
            <img src={img} alt="imagen" />)}

        </div>

            </div>
        </>
    )
}