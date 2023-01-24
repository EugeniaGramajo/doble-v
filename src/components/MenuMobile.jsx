import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-scroll'

export default function MenuMobile(props) {

    console.log(props)
  return (
    <>
      <Menu isOpen={props.menu}>
        <Link className="menu-item" to="home" smooth={true}>
          Home
        </Link>
        <Link className="menu-item" to="proyecto" smooth={true}>
          Proyectos
        </Link>
        <Link className="menu-item" to="artista" smooth={true}>
          Artista
        </Link>
        <Link className="menu-item" to="cuidados" smooth={true}>
          Cuidados
        </Link>
        <Link className="menu-item" to="faq" smooth={true}>
          FAQ
        </Link>
        <Link className="menu-item" to="contact" smooth={true}>
          Contacto
        </Link>
      </Menu>
    </>
  );
}
