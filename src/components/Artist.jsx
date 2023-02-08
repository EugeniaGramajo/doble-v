import React from "react";
import styles from "../styles/Artist.module.css";

export default function Artist() {
  return (
    <>
      <div id="artista" className={styles.padding}>
        <div data-aos="zoom-out" className={styles.general}>
          <div>
            <img 
            src={"./profile.jpg"} 
            alt="artista" 
            />
          </div>
          <div className={styles.flex}>
            <h1>SOBRE EL ARTISTA</h1>
            <p>Con una pasión incansable por su trabajo, Walter siempre busca nuevos desafíos y oportunidades para crear tatuajes únicos y significativos para sus clientes.
            Su estilo versátil y habilidades técnicas le permiten crear tatuajes que van desde los más tradicionales hasta los más modernos y elaborados. Cada tatuaje es cuidadosamente diseñado y realizado con la máxima atención a los detalles, garantizando que su arte sea de la más alta calidad.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
