const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "CDMX");
const precioCiudad = new Array(500, 400, 380, 200);

//lista de mapas
const datos = [
    {
        'ciudad' : 'Bogota',
        'precio' : 500
    },
    {
        'ciudad' : 'lima',
        'precio' : 400
    },
    {
        'ciudad' : 'Santiago',
        'precio' : 380
    },
    {
        'ciudad' : 'Montevideo',
        'precio' : 200
    },
];

const presupuesto = 600;

let i = 0;
while (i < datos.length && datos[i].precio > presupuesto) {
    i++;
}
//console.log("puedes comprar pasaje para: " + ciudadesDisponibles[i]);

if (i== datos.length) {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("puedes comprar pasaje para: " + datos[i].ciudad);
}

//DO WHILE
let ciudadSelec = '';
do{
    if(datos[i].precio < presupuesto)
    {
        ciudadSelec = datos[i].ciudad;
        break; //si se cumple la condicion, no es necesario seguir ejecutando.
    }
    i++;
} while(i < datos.length && ciudadSelec == '')
if(ciudadSelec == '')
    console.log("No tenemos pasajes disponibles");
else
    console.log("Puedes comprar pasaje para: " + ciudadSelec);