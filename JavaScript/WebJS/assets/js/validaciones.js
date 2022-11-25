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
}

const validadores = { //arma un objeto para cada input -> fecha, nombre, etc.
    nacimiento: input => validarNac(input),
};

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