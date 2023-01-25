import React from "react";

import styles from "../../styles/ButtonMenu.module.css";

export default function ButtonStyle(props) {
  const container = styles.container;
  const change = styles.change;

  console.log("estilo",props.state)

  return (
    <>
      <div className={`${props.state===true? change : container}`}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </>
  );
}
