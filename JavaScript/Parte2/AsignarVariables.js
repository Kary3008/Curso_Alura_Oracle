//const n1; ->no cambia su valor en el tiempo, no se puede reasignar.
nombrePasajero = "Kary";
apellidoPasajero = "B";
//let -> espacio de memoria que puede cambiar durante la ejecución del programa
//su alcance está limitado por bloques
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log("Con let: " + nombreCompletoPasajero)
//palabra var
//espacio de memora que pueda cambiar durante la ejecución del programa
//el alcance
var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

//bloque
{
   let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
    console.log("Con let: " + nombreCompletoPasajero)
    console.log("Con var: " + nombreCompletoDelPasajero);
}
//console.log("Con let: " + nombreCompletoPasajero) se ejecuta así, no va a permitir a la variable let por su alcance
console.log("Con var: " + nombreCompletoDelPasajero);