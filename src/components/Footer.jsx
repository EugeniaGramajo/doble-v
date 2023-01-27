import React from "react";
import styles from "../styles/Footer.module.css"

export default function Footer(){
    return(
        <>
        <div className={styles.general}>
            <div className={styles.copy}>
                <h5>Copyright © Doble v - 2023</h5>
                <h5>Diseño web <a href="https://github.com/EugeniaGramajo/doble-v" target="_blank">E Gramajo - M Lujan</a> </h5>
            </div>
        </div>
        </>
    )
}