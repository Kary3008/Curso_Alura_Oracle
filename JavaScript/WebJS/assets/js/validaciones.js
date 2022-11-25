/*console.log('Validaciones'); //Verificar si está conectado con HTML

const inputNac = document.querySelector('#birth');

inputNac.addEventListener('blur', (evento) =>
{
    validarNac(evento.target);
    //console.log(evento.target);
});*/
export function validar(input) 
{
    const TipoInput = input.dataset.tipo; //verifica el tipo de input a través de dataset
    if(validadores[TipoInput])
    {
        validadores[TipoInput](input);
    }

//implementar input-container--invalid
    //console.log(input.parentElement)
    if(input.validity.valid)
    {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ''
    }
    else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarError(TipoInput, input)
    }
}

const mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacío"
    },
    email: 
    {
        valueMissing: "Este campo no puede estar vacío",
        typeMismatch: "El correo no es válido"
    },
    password: 
    {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra mayúscula, una letra minúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: 
    {
        valueMissing: "Este campo no puede estar vacío",
        customError: "Debes tener al menos 18 años de edad",
    },
};

const validadores = { //arma un objeto para cada input -> fecha, nombre, etc.
    nacimiento: input => validarNac(input),
};

function mostrarError(TipoInput, input)
{
    let mensaje = ""

    return mensaje;
}

function validarNac(input)
{
    const fechaCliente = new Date(input.value);
    mayorEdad(fechaCliente);
    let mensaje = "";
    if(!mayorEdad(fechaCliente))
    {
        mensaje = "Debes tener al menos 18 años de edad";
    }
    input.setCustomValidity(mensaje);
}

function mayorEdad(fecha)
{
    const fechaActual =new Date();
    const diferencia = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
        );
    //console.log(diferencia <= fechaActual);
    return diferencia <= fechaActual;
   // console.log(fecha, "_____",fechaActual);
}