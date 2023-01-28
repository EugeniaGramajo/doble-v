import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/Slogan.module.css";

export default function Slogan() {
    const [width, setWidth] = useState(window.innerWidth);
 
    useEffect(()=>{
        setWidth(window.innerWidth)
    })

    return (
    <>
    <div className={styles.div}>
 
    </div>
    </>
  );
}
