"use client"
import { ReactNode, useState, createContext, useContext } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  todoCompleted: (id: string) => void;
  todoDelete: (id: string) => void;
  getCompletedTodos : (id: string) => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
};

export const todoContext = createContext<TodoContext>({
  todos: [],
  handleAddTodo: () => {},
  todoCompleted: () => {},
  todoDelete: () => {},
  getCompletedTodos : () => {},
  setTodos: () => {},
});

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos) as Todo[];
    } else {
      return [];
    }
  });


  const handleAddTodo = (task: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        task,
        completed: false,
        createdAt: new Date(),
      },
     
    ]);
  };
//  if task completed

const todoCompleted = (id:string) => {
  setTodos((prev) => {
 const newtodos = prev.map((task) => {
  if(task.id === id)
  {
    return {...task, completed: !task.completed}
  }
  return task;
 })
  localStorage.setItem('todos', JSON.stringify(newtodos))
 return newtodos;
  })
}


// task delete
const todoDelete= (id:string) => {
  setTodos((prev) => {
 const newtodos = prev.filter((task) => task.id !== id )
 localStorage.setItem('todos', JSON.stringify(newtodos))
 return newtodos;
  })
}

const getCompletedTodos = () => {
  return todos.filter((todo) => todo.completed);
};

  return (
    <todoContext.Provider value={{ todos, handleAddTodo , todoCompleted , setTodos, todoDelete, getCompletedTodos}}>
      {children}
    </todoContext.Provider>
  );
};

export function useTodos(){
  const todoContextValue = useContext(todoContext)
  if(!todoContextValue){
    throw new Error('Usetodos used outsite of Provider')
  }
  return todoContextValue;
}