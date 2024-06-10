import React,{useState} from "react";

export const TodoMooForm = ({addTodo})=>{

  const[value, setValue] = useState('')
  const HundleSubmit = (e) =>{
    e.preventDefault()
    console.log(value)
    addTodo(value)
    
  }

  return (
    <form className="TodoForm" onSubmit={HundleSubmit}>
      <input placeholder="add" type='text' onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">adad</button>
    </form>
  )
}