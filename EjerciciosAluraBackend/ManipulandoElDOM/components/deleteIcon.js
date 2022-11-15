import { displayTasks } from "./readTask.js";

const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click', () =>  deleteTask(id));
  return i;
};

const deleteTask = (id) => {
  // const parent = event.target.parentElement;
  // parent.remove();
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  // elimina la tarea del arreglo
  const index = tasks.findIndex(item => item.id === id);
  tasks.splice(index,1);
  // actualizar la vista
  // limpieza de cards
  const li = document.querySelector("[data-list]");
  li.innerHTML = "";
  //actualizar el local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();

  
};

export default deleteIcon;