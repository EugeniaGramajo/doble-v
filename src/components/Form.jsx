import React from "react";
import { useState } from "react";
import styles from "../styles/Form.module.css"



export default function Form() {
    const [inputs, setInputs] = useState({
        name: "",
        asunto: "",
        email: "",
        msg: "",
    });
    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }
    


    return (
        <>


            <div className={styles.divform}>
                <form action="https://formsubmit.co/gramajoeugenia@gmail.com" method="POST" >

                    <div className={styles.hh1}>
                        <h1 >Formulario de contacto</h1>

                    </div>
                    <div className={styles.divnamenum}>
                    <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Tu Nombre..." required></input>

                        <input type="text" name="asunto" value={inputs.asunto} onChange={handleChange} placeholder="Tu Asunto..." ></input>

                        <input type="email" name="email" value={inputs.email} onChange={handleChange} placeholder="Tu Email..." required ></input>

                    </div>


                    <textarea className={styles.divmsg} value={inputs.msg} type="text" name="msg" onChange={handleChange} placeholder="Escribe Un Mensaje..." ></textarea>
                    


                    <div className={styles.divbutton}>
                        <button className={styles.enviar} type="submit">Enviar</button>
                    </div>


                </form>
            </div>

        </>
    )
}