import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
