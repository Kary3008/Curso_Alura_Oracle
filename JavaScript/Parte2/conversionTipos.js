//Tipos de datos

//Alfanumerico
const nombrePasajero = "Pedro Silva";
console.log(nombrePasajero);
//nombrePasajero = "Ramón Silva"; /*no se puede cambiar, porque se define como 
//la variable que no cambia con el tiempo*/
//console.log(nombrePasajero);

//Numérico
let valorBoleto = 1000;
const tasaEmbarque = 60;
var gestionAgencia = 100;
console.log(valorBoleto);

//lógicos (true, false)
let boletoActivo = true;

//operaciones aritméticas
//suma
let totalBoletos = valorBoleto + 1700 + 65.45 + 100 + tasaEmbarque + gestionAgencia;
console.log(totalBoletos);
//porcentual
const porcentajeTasaEmbarque = 60/100;
let total2 = valorBoleto + valorBoleto*porcentajeTasaEmbarque + gestionAgencia;
console.log(total2);

//concatenación de texto
let nombrePasajero1 = "Leonardo";
let apellidoPasajero1 = "Lacruz";

let nombreCompleto = nombrePasajero1 + apellidoPasajero1;
let pasaporte = '1000' + '12'; 
let multi = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto); //concatena
console.log(pasaporte); //concatena
console.log(multi); //divide 

pasaporte = parseFloat('1000') + parseInt('12'); //para sumar la conversion
console.log(pasaporte);

let noEsNumero = parseInt('ASASA'); //enviará un NaN porque no es un número
console.log(noEsNumero);