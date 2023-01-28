import React from "react";
import styles from "../styles/Footer.module.css"
import Border from "./Border";

export default function Footer(){
    return(
        <>
        <div className={styles.general}>
           <Border></Border> 
            <div className={styles.copy}>
                <h5>Copyright © Doble v - 2023</h5>
                <h5>Diseño web <a href="https://github.com/EugeniaGramajo/doble-v" target="_blank">E Gramajo - M Lujan</a> </h5>
            </div>
        </div>
        </>
    )
}