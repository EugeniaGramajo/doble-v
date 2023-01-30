import React from "react";
import styles from "../../styles/NavBar.module.css"
import { Link } from "react-scroll";

export default function NavBar(props){
  
    return(
        <>
        <div className={styles.border}>
<img src="https://static.vecteezy.com/system/resources/previews/001/907/598/non_2x/golden-metallic-background-free-photo.jpg" alt="border"/>
        
        
        </div>  <div className={`${styles.general} `}>
        
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