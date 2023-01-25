export function validate(inputs) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {}
  
    if (!inputs.name) {
      errors.name = "Se requiere un nombre";
    }
    if (!regexEmail.test(inputs.email)) {
      errors.email = "Debe ser un correo electrónico";
    }
    if (!inputs.msg) {
      errors.message = "Se requiere un mensaje";
    }
    if(!inputs.phone){
        errors.phone="Se Requiere Un Telefono";
    }
  
    return errors;
  }
