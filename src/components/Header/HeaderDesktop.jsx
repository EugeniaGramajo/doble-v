import React, { useState, useEffect } from "react";
import NavBar from "./NavBar.jsx";
import styles from "../../styles/Header.module.css";
import Headroom from "react-headroom";



export default function HeaderDesktop() {
  const [scrolled, setScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY > 150) {
      setScrolled(true);
      console.log(window.scrollY);
      console.log(scrolled);
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
      <div className={styles.navBar}>
          <div id="home" className={`${styles.LogoDiv} ${styles.example}`}>
            <img className={styles.img} src="./logo-plano.jpg" alt="Logo" />
            <img className={styles.img1} src="./nombre2.jpg" alt="nombre" />
          </div>

          <Headroom
            onPin={() => console.log("pinned") }pinStart={150}
            onUnpin={() => console.log("unpinned")}>
        <NavBar></NavBar>
      </Headroom>

          

      </div>
    </>
  );
}
