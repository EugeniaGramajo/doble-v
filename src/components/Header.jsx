import React from "react";
import NavBar from "./NavBar.jsx";
import styles from "../styles/Header.module.css";
import Media from "react-media";

import ButtonMenu from "./ButtonMenu.jsx";

export default function Header() {
  return (
    <>
      <div className={styles.general}>
        <div id="home" className={styles.LogoDiv}>
          <img className={styles.img} src="./logo-plano.jpg" alt="Logo" />
          <img className={styles.img1} src="./nombre2.jpg" alt="nombre" />
        
        </div>
        <Media query="(min-width: 500px)">
          {(matches) => (matches ? <NavBar /> : <ButtonMenu />)}
        </Media>
      </div>
    </>
  );
}
