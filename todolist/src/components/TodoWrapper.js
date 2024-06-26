import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import {EditTodoForm} from './EditTodoForm'

const TodoWrapper = () => {

  const [todos, setTodos] = useState([]) //здесь хранятся таски
  const addTodo = (todo) =>{
    setTodos([...todos, {id:uuidv4(), task: todo, completed: false, isEditing: false}]) // Это означает, что в новый массив будут добавлены все элементы, которые уже были в todos.
    
  }
  const togleComplet =(id) =>{
   setTodos(todos.map(todo => 
    todo.id === id ? {...todo, completed: !todo.completed} : todo
   ))
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const editTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }
  const editTask = (task, id) =>{
    setTodos(todos.map((todo) => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
   <div className='TodoWrapper'>
    <h1>To do !!!</h1>
     <TodoForm addTodo={addTodo} />
     {todos.map((todo, index)=> todo.isEditing ? (
     <EditTodoForm editTodo={editTask} task={todo}/>) :
      <Todo task={todo} key = {index} togleComplet = {togleComplet} deleteTodo = {deleteTodo}
      editTodo ={editTodo}/>
     )}
   </div>
  )
}

export default TodoWrapper
