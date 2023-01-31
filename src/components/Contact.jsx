import React from "react"
import Form from "./Form"
import SocialMedia from "./SocialMedia"
import styles from "../styles/Contact.module.css"
import{ImLocation2, ImPhone} from "react-icons/im"
import {BsStopwatch} from "react-icons/bs"

export default function Contact(props) {
    return (
        <>
            <div id="contacto" className={styles.formsocial}>
               
               
               <div className={styles.contacto}> 
                <SocialMedia></SocialMedia>
                 
                    
                    <h1><ImLocation2 className={styles.imlocation}/>
                        Puerto rico 4205 apto 06 Villa del Cerro. 
                        </h1>
                    
                    <h1><ImPhone className={styles.imphone}/>
                         +598 99 476 812
                         </h1>
                
                    <h1> <BsStopwatch className={styles.bswatch}/>
                        soy un horarios jaja saludos
                        </h1>
                </div>

                
                <div className={styles.form}><Form></Form></div>
                
            </div>
        </>

    )
}