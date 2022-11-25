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

export default checkComplete;

