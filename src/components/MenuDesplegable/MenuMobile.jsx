import React from "react";
import { useDispatch, useSelector } from "react-redux";
import{ Link }from "react-scroll"
import styles from "../../styles/Menu.module.css"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { menuButton } from "../../store/actions";


export default function MenuMobile(props) {

  const aux = useSelector(state=>state.menuButton)
  const dispatch= useDispatch()

  const clickHandler = ()=>{
    dispatch(menuButton())
  }
  return (
    <>
    <div >
    <div className={`${styles.menu} ${aux ? styles.menuanimationenter : styles.menuanimationexit}`}>

        <Link className={styles.items} onClick={clickHandler} to="home" smooth={true}>
          Home
        </Link>
        <Link className={styles.items} onClick={clickHandler} to="proyecto" smooth={true}>
          Proyectos
        </Link>
        <Link className={styles.items} onClick={clickHandler} to="artista" smooth={true}>
          Artista
        </Link>
        <Link className={styles.items} onClick={clickHandler} to="cuidados" smooth={true}>
          Cuidados
        </Link>
        <Link className={styles.items} onClick={clickHandler} to="faq" smooth={true}>
          FAQ
        </Link>
        <Link className={styles.items} onClick={clickHandler} to="contact" smooth={true}>
          Contacto
        </Link>
      </div>
      </div>
    </>
  );
}
