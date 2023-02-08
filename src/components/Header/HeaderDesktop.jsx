import React from "react";
import NavBar from "./NavBar.jsx";
import styles from "../../styles/Header.module.css";
import Headroom from "react-headroom";

export default function HeaderDesktop() {

  return (
    <>
{      <div className={styles.navBar}>
          <div id="home" className={`${styles.LogoDiv} ${styles.example}`}>
            <img 
            className={styles.img} 
            src="./logo-plano.png" 
            alt="Logo" 
            />
          </div>
          <Headroom
            onPin={() => "" }pinStart={150}
            onUnpin={() =>"" }>
        <NavBar></NavBar>
      </Headroom>
      </div>}
    </>
  );
}
