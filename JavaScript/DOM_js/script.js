const btn = document.querySelector('[data-form-btn]');
console.log(btn);

//arrow functions o funciones anónimas
const createTask = (evento) =>
{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add("card"); //agregar clase
    input.value = "";
    //backticks  (template string)
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content; //agregar a HTML

    //al elemento lista quiero agregarle un hijo
    list.appendChild(task);

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
