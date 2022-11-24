const btn = document.querySelector('[data-form-btn]');
console.log(btn);

//arrow functions o funciones anónimas
const createTask = (evento) =>
{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}

//listener
btn.addEventListener("click", createTask //function(evento)
/*{
    evento.preventDefault();
    //console.log(evento);
    //console.log("Crear tarea");
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}*/);
