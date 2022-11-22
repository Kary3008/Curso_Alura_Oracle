//para declarar un arreglo con tipo de dato alfanumérico
const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "CDMX", "Denver");
console.log(ciudadesDisponibles);

//Definir una lista de forma abreviada
const paisesDisponibles = ["Mexico", "Colombia", "Peru", "Argentina", "Uruguay", "Venezuela"];
console.log(paisesDisponibles);

//saber cuantos elementos tenemos
const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} elementos`);

//remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

paisesDisponibles.shift();
console.log(paisesDisponibles);
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} elementos`);

//remover el último elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

paisesDisponibles.pop();
console.log(paisesDisponibles);
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} elementos`);


//filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e)=> e == 'Peru');
console.log(paisesFiltrados);
//si no se encuentra un elemento, entonces la lista se muestra vacia
const paisesFiltrados1 = paisesDisponibles.filter((e)=> e == 'Brasil');
console.log(paisesFiltrados1);

//conocer los elementos
//si no se encuentra un elemento, entonces la lista se muestra vacia
const paisesFiltrados2 = paisesDisponibles.filter((e)=> e.length > 6);
console.log(paisesFiltrados2);

//unificar los elementos en una cadena de caracteres.
console.log(paisesDisponibles.join('-'));

//ordenar la lista
console.log(paisesDisponibles.sort()); //modifica el array

//posicion de un elemento
console.log(`Peru está en la posición: ${paisesDisponibles.indexOf('Peru')}`);

//unificar dos listas
const listaPC = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPC);