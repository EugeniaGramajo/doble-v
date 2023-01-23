import React from "react";
import NavBar from "./NavBar";
import styles from "../styles/Header.module.css"

export default function Header(){
    return (
        <>
        <div className={styles.general}>
            <h1>Soy el Header</h1>
            <NavBar></NavBar>

            
        </div>
        </>
    )
}