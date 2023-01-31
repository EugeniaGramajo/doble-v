import React from 'react';
import { FaInstagram, FaFacebook,FaWhatsapp} from 'react-icons/fa';
import styles from "../styles/SocialMedia.module.css";


const SocialMedia = () => {
    return (
    
        <div className={styles.divgral}>

            <a href="https://www.instagram.com/doblevtatuajes/" >
                <FaInstagram className={styles.in} />
            </a>

            <a href="https://www.facebook.com/people/Doble-V-Tatuajes-Uruguay/100089058297865/" >
                <FaFacebook className={styles.fa} />
            </a>

            <a href={`https://wa.me/+59899476812?text=Hola,me interesa conocer mas sobre tus servicios`}>
            <FaWhatsapp className={styles.wsp}/>
            </a>

            

        </div>
    );
}


export default SocialMedia;
