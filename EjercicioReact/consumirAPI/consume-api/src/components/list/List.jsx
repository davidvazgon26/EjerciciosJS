import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function List() {
  const [todos, setTodos] = useState()
  const url = "https://jsonplaceholder.typicode.com/todos"

  const fetchAPI = async ()=>{
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  //Usamos useEffect para hacer el llamado al cargar la pagina
  useEffect(()=>{
    fetchAPI()
  }, [])


  return (
    <div className="App">
        <Link to="/Demo">Demo</Link> 
    <ul>
        { !todos? "Reloading...":
        todos.map((todo, index)=>{
          return <li key={index}>{todo.title}{todo.completed?" ✅":" ❌"}</li>
        })}
       </ul>
    </div>
  );
}

export default List;
