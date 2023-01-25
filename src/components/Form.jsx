import React from "react";
import { useState } from "react";
import { validate } from "../Data/validate";
import styles from "../styles/Form.module.css"



export default function Form() {
    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
        email: "",
        msg: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
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
                phone: "",
                email: "",
                msg: "",
            });
            setErrors({
                name: "",
                phone: "",
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

                    <div className={styles.divnamenum}>
                        <input className={styles.name} type="text" name="name" value={inputs.name} onChange={handleChange} placeholder="Escribe tu nombre..."></input>

                        <input className={styles.tel} type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" required onChange={handleChange} placeholder="Escribe Tu Numero..."></input>

                        <input className={styles.email} type="text" name="email" value={inputs.email} onChange={handleChange} placeholder="Escribe Tu Email..."></input>

                    </div>
                   
                    <textarea className={styles.divmsg} value={inputs.msg} type="text" name="msg" onChange={handleChange} placeholder="Escribe Un Mensaje..."></textarea>
                    <p>{errors.msg}</p>



                    <button className={styles.enviar} type="submit">Enviar</button>



                </form>
            </div>
        </>
    )
}