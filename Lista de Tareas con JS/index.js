//Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

//task container
const tasksContainer = document.getElementById('tasksContainer');

//Guardamos la fecha
const setDate = () => {
    //Date nos provee JS, obtenemos la fecha
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleDateString('es', {weekday: 'long'});
    dateMonth.textContent = date.toLocaleDateString('es', {month: 'short'});
    dateYear.textContent = date.toLocaleDateString('es', {year: 'numeric'});
};

//Funcion para agregar una nueva tarea

const addNewTask = event => {
    //esta funcion evita que se haga un "submit"
    event.preventDefault();
    //El evento crea una nueva variable "Texto de tarea"
    const { value } = event.target.taskText;
    //Controlamos de que exista un texto, asi no se agregan tareas vacias
    if(!value) return;
    //Creamos un elemento html div
    const task = document.createElement('div');
    //Al elemento le añadimos las clases task y roundBorder
    task.classList.add('task', 'roundBorder');
    //le agregamos un eventListener para que llame a una funcion al hacer click
    task.addEventListener('click', changeTaskState)
    //Dentro del elemento ponemos el text que ingreso el usuario
    task.textContent = value;
    //prepend indica que el elemento se vaya agregando primero que todos (por encima)
    tasksContainer.prepend(task);
    //Reseteamos el form
    event.target.reset();
};

//cambiar estados de las tareas
const changeTaskState = event => {
    //Si tiene la clase done, toggle le saca, y si no tiene, toggle le agrega
    event.target.classList.toggle('done');
};

//Funcion para ordenar las tareas
const order = () => {
    const done = [];
    const toDo = [];

    //accedemos a cada uno de los elementos del tasksContainer e iteramos
    tasksContainer.childNodes.forEach( el => {
        //preguntamos si el elemento tiene la clase done o toDo y agrega uno u el otro con puh(al final del array)
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return[...toDo, ...done];
}

const renderOrderedTasks = () => {
    //tomamos cada elemento de esta clase y ponemos en el tasksContainer
    //Funcion para ordenar las tareas hechas y no
    order().forEach(el => tasksContainer.appendChild(el))
} 

setDate();