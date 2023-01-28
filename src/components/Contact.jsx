import React from "react"
import Form from "./Form"
import SocialMedia from "./SocialMedia"
import styles from "../styles/Contact.module.css"
export default function Contact(props) {
    return (
        <>
            <div id="contacto" className={styles.formsocial}>
               
               
               <div className={styles.contacto}> 
                <SocialMedia></SocialMedia>
                
                    <h1>Dirección:</h1>
                    <li>Puerto rico 4205 apto 06 12800 Villa del Cerro.</li>
                    <h1>Datos de Contacto:</h1>
                    <li>+598 99 476 812</li>
                    <h1>Horarios:</h1>
                    <li>soy un horario jaja saludos</li>
                </div>
                <div className={styles.form}><Form></Form></div>
                
            </div>
        </>

    )
}