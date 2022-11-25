console.log('Validaciones'); //Verificar si está conectado con HTML

const inputNac = document.querySelector('#birth');

inputNac.addEventListener('blur', (evento) =>
{
    validarNac(evento.target);
    //console.log(evento.target);
});

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