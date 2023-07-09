"use client"

import React, { useState } from 'react';
import { useTodos } from './TodoList';

const Todos = () => {

      
  const { todos, todoDelete, todoCompleted, setTodos } = useTodos();
  const [editId, setEditId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const handleEdit = (id: string) => {
    const todo = todos.find((item) => item.id === id);
    if (todo) {
      setEditId(id);
      setEditValue(todo.task);
    }
  };

  const handleSave = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: editValue };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editId === todo.id ? (
            <div>
              <input
                type="text"
                value={editValue}
                onChange={handleChange}
                placeholder="Edit task"
                className='input input-bordered w-96 m-3'
              />
              <button className="btn btn-active btn-accent mx-5" onClick={() => handleSave(todo.id)}>Save</button>
              <button className='btn btn-error my-5 mx-5' onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => todoCompleted(todo.id)}
              />
              <label className="text-2xl mr-10 my-5 mx-3" htmlFor={`todo-${todo.id}`}>
                {todo.task}
              </label>
              <button className="btn btn-error my-5" onClick={() => todoDelete(todo.id)}>
                Delete
              </button>
              <button className="btn btn-active btn-accent mx-5" onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
