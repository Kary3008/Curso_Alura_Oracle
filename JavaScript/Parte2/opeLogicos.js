//Operadores de comparación
const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "CDMX", "Denver");

//Evaluar una condición
console.log(`Verificando pasajes para ${ciudadDestino}`);
//console.log(ciudadesDisponibles.indexOf(ciudadDestino));
if(ciudadesDisponibles.indexOf(ciudadDestino) >= 0)
    console.log('Pasaje disponible para venta');
    else 
    console.log('Ciudad no disponible para viajar.');

const valorPasaje = "1000";

if(valorPasaje == 1000) //=== tiene que ser igual tanto el valor como el tipo de dato.
    console.log('El pasaje vale 1000');

//Operadores lógicos
//AND (&&), OR(||), NOT(!)

const edad = 19;
const estaAcompanado= true;

console.log(`Verificando si la edad ${edad} es mayor o igual a 18`);
    if((ciudadesDisponibles.indexOf(ciudadDestino) > 0) && (edad >= 18 || estaAcompanado))
    {
    console.log('La venta de boletos está permitida');
    } else {
        console.log('Ciudad no disponible para viajar');
        }
