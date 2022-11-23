const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "CDMX");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuesto = 300;

let i = 0;
while (precioCiudad[i] > presupuesto) {
    i++;
    //i = i + 1
    //i += 1
}
console.log("puedes comprar pasaje para: " + ciudadesDisponibles[i]);

while (precioCiudad[i] > presupuesto && i < ciudadesDisponibles.length) {
    i++;
    //i = i + 1
    //i += 1
}
if (i== ciudadesDisponibles.length) {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("puedes comprar pasaje para: " + ciudadesDisponibles[i]);
}

