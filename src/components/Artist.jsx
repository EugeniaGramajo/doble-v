import React from "react";
import styles from "../styles/Artist.module.css";

export default function Artist() {
  return (
    <><div id="artista" className={styles.padding}>
      
      <div data-aos="zoom-out"  className={styles.general}>              
         <div><img src={"./profile.jpg"} alt="artista" /></div>
       
        <div className={styles.flex}>
            <h1>SOBRE EL ARTISTA</h1>   
         <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tortor sem, sagittis vitae mauris nec, semper feugiat massa. Fusce
          dapibus, libero eget posuere cursus, ex felis sollicitudin justo, ut
          placerat diam leo eu urna. Cras id magna nisi. Aenean lobortis eros id
          metus pretium, at condimentum nisl euismod. Pellentesque aliquam est
          at lorem accumsan sagittis. Vivamus luctus neque sed facilisis
          elementum. Aenean vel imperdiet mi.
        </p>    
        </div>
        </div>
      </div>
    </>
  );
}
