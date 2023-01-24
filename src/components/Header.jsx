import React from "react";
import NavBar from "./NavBar";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.general}>
        <div id="home" className={styles.LogoDiv}>
          <img className={styles.img} src="./logo-plano.jpg" alt="Logo" />
          <img className={styles.img} src="./nombre.jpg" alt="nombre"/>
        </div>
        <NavBar></NavBar>
      </div>
    </>
  );
}
