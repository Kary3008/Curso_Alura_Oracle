const ciudad1 = "Bogotá";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//para declarar un arreglo con tipo de dato alfanumérico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago");
console.log(ciudadesDisponibles);

//Definir una lista de forma abreviada
const paisesDisponibles = ["Mexico", "Colombia", "Peru", "Argentina"];
console.log(paisesDisponibles);

//Agregar elementos al array con push
//{
    paisesDisponibles.push('Uruguay');
    ciudadesDisponibles.push('Montevideo');

    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);

//Agregar elementos al inicio de un array con unshift
    paisesDisponibles.unshift('Ecuador');
    ciudadesDisponibles.unshift('Quito');
    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);
//}

//mostrando los elementos de la lista
console.log(paisesDisponibles[0]); //primer pais
console.log(ciudadesDisponibles[0]); //primer ciudad

//quitar elementos y sustituirlos.
paisesDisponibles.splice(1, 2, 'Venezuela', 'Paraguay');
console.log(paisesDisponibles);

paisesDisponibles.splice(1, 2, 'Mexico',);
console.log(paisesDisponibles);