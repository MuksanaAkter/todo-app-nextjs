"use client"
import Link from 'next/link'

import React from 'react';
import { useTodos } from './TodoList';

const CompleteTask = () => {
  const { todos, todoDelete } = useTodos();

  const completedTodos = todos.filter((todo) => todo.completed);

  console.log(completedTodos);

  return (
    <div>
      <h1 className="py-2 my-3 border-b-4">Completed</h1>
      {completedTodos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            readOnly
          />
          <label className='line-through text-2xl mr-10 mx-3'>{todo.task}</label>
          <button className='btn btn-error my-5' onClick={() => todoDelete(todo.id)}>Delete</button>
       <Link  className='btn btn-active btn-accent mx-5 ' href="/">Edit</Link>
        </div>
      ))}
      
    </div>
  );
};

export default CompleteTask;