const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "CDMX");

let valorPasaje = 0;

if(ciudadesDisponibles.indexOf(ciudadDestino) > -1)
{
    switch(ciudadDestino)
    {
        case "Bogota":
            valorPasaje = 500;
            break;
        case "Lima":
            valorPasaje = 400;
            break;
        case "Santiago":
            valorPasaje = 380;
            break;
        case "CDMX":
            valorPasaje = 200;
            break;
        default:
            console.log(`El valor del pasaje es: ${valorPasaje}`);
            break;
    }
    if(valorPasaje > 0)
        console.log(`El valor del pasaje es: ${valorPasaje}`);
}


