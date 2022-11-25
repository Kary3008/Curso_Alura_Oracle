import { validar } from "./validaciones.js";

//seleccionar todos los inputs
const inputs = document.querySelectorAll("input");

//agrega el eventlistener, y manda a llamar la funcion
inputs.forEach(input => 
    {
        input.addEventListener('blur', (input) => 
        {
            validar(input.target);
        });
    });
