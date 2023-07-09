"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useTodos } from "./TodoList";

const AddTask = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
    console.log("Olla , Tanvir Komon tala vue");
  };

  return (
    <div>
      <h1 className="py-2 my-3 border-b-4">Add Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input input-bordered w-96 m-3"
          type="text"
          value={todo}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-500 font-bold p-3 rounded-md">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
