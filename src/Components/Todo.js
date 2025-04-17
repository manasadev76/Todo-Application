import React from 'react'
import './Todo.css';

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <button className='edit' onClick={() => editTodo(task.id)}>Edit</button>
        <button className='delete' onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
    </div>
  )
}