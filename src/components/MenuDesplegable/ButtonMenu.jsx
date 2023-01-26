import React from "react";

import styles from "../../styles/ButtonMenu.module.css";
import ButtonStyle from "./ButtonStyle";
import { useDispatch, useSelector } from "react-redux";
import {menuButton} from "../../store/actions"

export default function ButtonMenu() {

  

  const dispatch = useDispatch()
const aux = useSelector(state=>state.menuButton)
  const clickHandler = () => {
dispatch(menuButton)
  };
  return (
    <>
      <div className={styles.buttonGeneral}>
        <button className={styles.button} onClick={clickHandler}>
          <ButtonStyle aux={aux}></ButtonStyle>
        </button>
      </div>
    </>
  );
}
