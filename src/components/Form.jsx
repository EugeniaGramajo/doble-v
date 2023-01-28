import React from "react";
import { useState } from "react";
import { validate } from "../Data/validate";
import styles from "../styles/Form.module.css"



export default function Form() {
    const [inputs, setInputs] = useState({
        name: "",
        asunto: "",
        email: "",
        msg: "",
    });
    const [errors, setErrors] = useState({
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

        setErrors(validate({
            ...inputs,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.keys(errors).length === 0) {
            alert("Datos completos");
            setInputs({
                name: "",
                asunto: "",
                email: "",
                msg: "",
            });
            setErrors({
                name: "",
                asunto: "",
                email: "",
                msg: "",
            });
        } else {
            alert("Debe llenar todos los campos");
        }

    }





    return (
        <>


            <div className={styles.divform}>
                <form onSubmit={handleSubmit}>

                    <div className={styles.hh1}>
                        <h1 >Formulario de contacto</h1>

                    </div>
                    <div className={styles.divnamenum}>

                        <input type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Tu Nombre..."required></input>

                        <input type="text" name="asunto"  value={inputs.asunto}onChange={handleChange} placeholder="Tu Asunto..." ></input>

                        <input type="email" name="email" value={inputs.email} onChange={handleChange} placeholder="Tu Email..." required></input>

                    </div>


                    <textarea className={styles.divmsg} value={inputs.msg} type="text" name="msg" onChange={handleChange} placeholder="Escribe Un Mensaje..." required></textarea>
                    <p>{errors.msg}</p>


                    <div className={styles.divbutton}>
                        <button className={styles.enviar} type="submit">Enviar</button>
                    </div>


                </form>
            </div>

        </>
    )
}