import React from "react";
import styles from "../../styles/Header.module.css";
import MenuMobile from "../MenuDesplegable/MenuMobile"
import ButtonMenu from "../MenuDesplegable/ButtonMenu";

export default function HeaderMobile() {
  return (
    <>
      <div className={`${styles.general} ${styles.navBarMobile}`}>
        <div id="home" className={styles.LogoDiv}>
          <img 
          className={styles.img1} 
          src="./logo-plano.png" 
          alt="Logo" 
          />
          <div className={styles.button}></div>
          <ButtonMenu />
        </div>
        <div><MenuMobile></MenuMobile>
        </div>
      </div>
    </>
  );
}
