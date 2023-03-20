 /**
  En este desafío, debes implementar la lógica de un planificador de tareas que permita agregar, eliminar y marcar como completadas las tareas, así como también mostrar un registro de las mismas. Para ello, debes construir la lógica de la función closure llamada createTaskPlanner para que devuelva los siguientes métodos:

**addTask(task): recibe un objeto que contiene la tarea y la agrega al array de tareas. La tarea debe estar conformada por las siguientes propiedades: id, name, priority, tags y completed, donde el estado completed se agrega automáticamente como falso al momento de agregar una tarea.
**removeTask(value): recibe el id o nombre de la tarea y la elimina del array de tareas.
**getTasks(): Devuelve el array de tareas.
**getPendingTasks(): Devuelve solo las tareas pendientes.
**getCompletedTasks(): Devuelve solo las tareas completadas.
**markTaskAsCompleted(value): Recibe el id o nombre de la tarea y la marca como completada.
**getSortedTasksByPriority(): Devuelve una copia de las tareas ordenadas según su prioridad (3: poco urgente, 2: urgente, 1: muy urgente), sin modificar la lista de tareas original.
**filterTasksByTag(tag): Filtra las tareas por una etiqueta específica.
**updateTask(taskId, updates): Buscar la tarea correspondiente con el id especificado y actualizar sus propiedades con las especificadas en el objeto updates.
  */
 
 function createTaskPlanner() {
  // Tu código aquí 👈
  const task = []
  return {
    prueba: "esta es una prueba",
    addTask: (obj) => {
      task.push({
        id: obj.id,
        name: obj.name,
        priority: obj.priority,
        tags: obj.tags.length ? obj.tags : [],
        completed: obj.completed === true ? true : false,
      });
      console.log("Registro exitoso");
    },
    getTasks: () => task,
    removeTask: (id) => {
      const indice = task.findIndex((el) => el.id === id); //Encuentro el indice
      task.splice(task.indexOf(indice), 1); // Lo elimino del arreglo
    },
    getPendingTasks: () => {
      return task.filter((el) => !el.completed);
    },
    getCompletedTasks: () => {
      return task.filter((el) => el.completed);
    },
    markTaskAsCompleted: (value) => {
        if(typeof value === 'string'){
            task.forEach(arr => {if(arr.name === value) arr.completed=true})
        }else{
            task.forEach(arr => {if(arr.id === value) arr.completed=true})
        }
    },
    getSortedTasksByPriority: ()=>{
        const sortedTask = [...task].sort((a, b) => a.priority - b.priority);
      return sortedTask;
    },
    filterTasksByTag:(tag) => {
        return task.filter((task) => task.tags.includes(tag));
      },
    updateTask:(taskId, updates) => {
     
        // obtenemos el id como lo hicimos previamente
        const index = tasks.findIndex((task) => task.id === taskId);
        // agregamos las propiedades extras destructurando ambos objetos
        tasks[index] = { ...tasks[index], ...updates };
      },
  };

    
}


const planner = createTaskPlanner();

console.log(planner.prueba);

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});

planner.addTask({
    id: 3,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"],
    completed: true
});

planner.addTask({
    id: 2,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"],
    completed: true
});


console.log(planner.getTasks())


planner.removeTask(2);
console.log("------------------------")
console.log(planner.getTasks())
console.log("------------------------")
console.log(planner.getCompletedTasks())
console.log("------------------------")
console.log(planner.getPendingTasks())
console.log("------------------------")

planner.markTaskAsCompleted("Comprar leche")

console.log("------------------------")
console.log("------------------------")
console.log(planner.getTasks())

