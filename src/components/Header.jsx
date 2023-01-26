import React, { useState, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import styles from "../styles/Header.module.css";
import Media from "react-media";

import ButtonMenu from "./MenuDesplegable/ButtonMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
 
 const aux = window.addEventListener("scroll", () => {
    console.log(window.scrollY); // o window.pageYOffset
  });


  function handleScroll(aux) {
    if (window.scrollY > 150) {
      setScrolled(true);
      console.log(scrolled)
    } else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className={styles.general}>
        <div id="home" className={styles.LogoDiv}>
          <img className={styles.img} src="./logo-plano.jpg" alt="Logo" />
          <img className={styles.img1} src="./nombre2.jpg" alt="nombre" />
          <div className={styles.button}>
            <Media query="(min-width: 500px)">
              {(matches) => (matches ? "" : <ButtonMenu />)}
            </Media>
          </div>
        </div>
        <div className={`${styles.navBar} ${scrolled ? styles.scrolled : ""}`}>
          <Media query="(min-width: 500px)">
            {(matches) => (matches ? <NavBar scrolled={scrolled} /> : "")}
          </Media>
        </div>
      </div>
    </>
  );
}
