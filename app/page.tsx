import AddTask from "./Component/AddTask";
import CompleteTask from "./Component/CompleteTask";
import Todos from "./Component/Todos";
// import TodoList from "./Component/TodoList";

export default function Home() {
  return (
    
   <main className="max-w-2xl mx-auto">
    <div className=" bg-slate-500">
    <h1 className="text-center font-bold text-3xl py-3 my-6">TODO APP</h1>
    </div>
    <AddTask></AddTask>
    {/* <TodoList></TodoList> */}
    <Todos></Todos>
    <CompleteTask></CompleteTask>

   </main>
  )
}
