const btn = document.querySelector('[data-form-btn]');
console.log(btn);

//arrow functions o funciones anónimas
const createTask = (evento) =>
{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const task = document.querySelector('[data-task]');
    input.value = "";
    //backticks  (template string)
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content; //agregar a HTML
    console.log(value);
    //console.log(task);
    console.log(content);
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
