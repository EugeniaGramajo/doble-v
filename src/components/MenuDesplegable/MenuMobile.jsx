import React from "react";
import{ Link }from "react-scroll"
import styles from "../../styles/Menu.module.css"

export default function MenuMobile(props) {
  const aux = props.isOpen

  console.log("aux", aux)
  return (
    <>
    <div className={styles.div}>
      <div className={styles.menu}>
        <Link className={styles.items} to="home" smooth={true}>
          Home
        </Link>
        <Link className={styles.items} to="proyecto" smooth={true}>
          Proyectos
        </Link>
        <Link className={styles.items} to="artista" smooth={true}>
          Artista
        </Link>
        <Link className={styles.items} to="cuidados" smooth={true}>
          Cuidados
        </Link>
        <Link className={styles.items} to="faq" smooth={true}>
          FAQ
        </Link>
        <Link className={styles.items} to="contact" smooth={true}>
          Contacto
        </Link>
      </div>
      </div>
    </>
  );
}
