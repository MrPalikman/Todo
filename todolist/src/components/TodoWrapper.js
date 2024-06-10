import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import { TodoMooForm } from './TodoMooForm'

const TodoWrapper = () => {

  const [todos, setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos([...todos, {id:uuidv4(), task:todo, completed: false, isEditing: false}]) // Это означает, что в новый массив будут добавлены все элементы, которые уже были в todos.
    console.log(todos)
  }

  return (
   <div className='TodoWrapper'>
    <h1>To do !!!</h1>
     <TodoForm addTodo={addTodo} />
     {todos.map((el, index)=>(
      <Todo task={el} key = {index}/>
     ))}
   </div>
  )
}

export default TodoWrapper
