import React from "react";
import styles from "../../styles/Header.module.css";
import MenuMobile from "../MenuDesplegable/MenuMobile"
import ButtonMenu from "../MenuDesplegable/ButtonMenu";
import { useSelector } from "react-redux";

export default function HeaderMobile() {
  const mobileNav = useSelector(state=>state.menuButton)
  return (
    <>
      <div className={`${styles.general} ${styles.navBarMobile}`}>
        <div id="home" className={styles.LogoDiv}>
          <img className={styles.img1} src="./logo-plano.png" alt="Logo" />
          
          <div className={styles.button}></div>
          <ButtonMenu />
          
        </div>
       {mobileNav===true && <div><MenuMobile></MenuMobile></div>}
        
      </div>
    </>
  );
}
