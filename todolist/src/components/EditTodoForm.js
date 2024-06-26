import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

  const [value, setValue] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault()
    editTodo(value, task.id)
    setValue('')
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit} >
     <input type='text' placeholder='обновить задачу' className='todo-input' 
      onChange={e => setValue(e.target.value)} value={value}/>
     <button type = 'submit' className='todo-btn'>Обновить </button>

    </form>
  )
}