import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTask.js';

export const addTask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector('[data-form-date]');

  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');

  if(value === "" || date === "") {
    alert('Aun faltan campos por llenar')
    return
  }

  input.value = '';
  calendar.value = '';

  // para los checks
  const complete = false

  const taskObj = {
    value,
    dateFormat,
    complete,
    id: uuid.v4()
  };

  // inicializar tarjetas para evitar duplicidad al cargar nuevo elemento
list.innerHTML = '';
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.push(taskObj);
  localStorage.setItem('tasks', JSON.stringify(taskList));

  displayTasks();

  // const task = createTask(taskObj);
  // list.appendChild(task);
};

export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement('li');
  task.classList.add('card');

  const taskContent = document.createElement('div');

  const check = checkComplete(id)

  if (complete) {
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
  }

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement('span');
  dateElement.innerHTML = dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));
  return task;
};