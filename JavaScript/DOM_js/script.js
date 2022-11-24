//Inmediately invoked function expression IIFE
( () => {

const btn = document.querySelector('[data-form-btn]');
//console.log(btn);

//arrow functions o funciones anónimas
const createTask = (evento) =>
{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card'); //agregar clase
    input.value = '';

    //backticks
    //console.log(checkComplete());
    const taskContent = document.createElement('div');
    //backticks  (template string)
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
        //task.innerHTML = content; //agregar a HTML
    task.appendChild(taskContent);
    //al elemento lista quiero agregarle un hijo, (nodo hijo dentro del nodo padre)
    list.appendChild(task);

    //console.log(value);
    //console.log(task);
    //console.log(content);
};

//listener
btn.addEventListener('click', createTask);
/*btn.addEventListener("click", createTask //function(evento)
{
    evento.preventDefault();
    //console.log(evento);
    //console.log("Crear tarea");
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
});*/

const checkComplete = () =>
{
    const i = document.createElement('i'); //etiqueta i
    //i.classList.add("far fa-check-square icon"); //clases de la etiqueta i
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", CompleteTask);
    return i;
};

const CompleteTask = (event) =>
{
    //cambiar el elemento cuando se completa la tarea
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far'); //cambiar dinámicamente la tarea
    /* 
    element.classList.add('fas');
    element.classList.add('completeIcon');
    element.classList.remove('far');*/
    //console.log(event.target);
};

})();