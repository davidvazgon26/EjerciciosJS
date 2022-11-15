import { createTask } from "./addTask";

export const readTask = () => {
   const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
   console.log(taskList)

   taskList.forEach((task) => {
    console.log(createTask(task))
    
   });
}