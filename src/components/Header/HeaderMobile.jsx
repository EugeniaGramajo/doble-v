import React from "react";
import styles from "../../styles/Header.module.css";
import Media from "react-media";

import ButtonMenu from "../MenuDesplegable/ButtonMenu";

export default function HeaderMobile() {
  return (
    <>
      <div className={styles.general}>
        <div id="home" className={styles.LogoDiv}>
          <img className={styles.img} src="./logo-plano.jpg" alt="Logo" />
          <img className={styles.img1} src="./nombre2.jpg" alt="nombre" />
          <div className={styles.button}></div>
          <ButtonMenu />
        </div>
      </div>
    </>
  );
}
