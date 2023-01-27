import React from "react";
import styles from "../../styles/NavBar.module.css"
import { Link } from "react-scroll";

export default function NavBar(props){
  
    return(
        <>
        <div className={`${styles.general} `}>
        
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.button}
        >
          Home
        </Link>
        <Link
          to="proyectos"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.button}
        >
          Proyectos
        </Link>
        <Link
          to="artista"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.button}
        >
          Artista
        </Link>
        <Link
          to="cuidados"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.button}
        >
          Cuidados
        </Link>
        <Link
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.button}
        >
          FAQ
        </Link>
        <Link
          to="contacto"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={styles.button}
        >
          Contacto
        </Link>
      
        </div>
        </>
    )
}