import React from "react";
import { useState } from "react";
import ToDoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <h1>Project Tracker App</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <ToDoList />
    </>
  );
}

export default App;
