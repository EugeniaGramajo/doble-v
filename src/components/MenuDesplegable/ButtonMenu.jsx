import React, { useState } from "react";
import MenuMobile from "./MenuMobile";
import styles from "../../styles/ButtonMenu.module.css";
import ButtonStyle from "./ButtonStyle";

export default function ButtonMenu() {
  const [menu, setMenu] = useState(false);

  const clickHandler = () => {
setMenu(!menu)
  };
  return (
    <>
      <div className={styles.buttonGeneral}>
        <button className={styles.button} onClick={clickHandler}>
          <ButtonStyle state={menu}></ButtonStyle>
        </button>
      </div>
      {menu ? <MenuMobile isOpen={menu}></MenuMobile> : ""}
    </>
  );
}
