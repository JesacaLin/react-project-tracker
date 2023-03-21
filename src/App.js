import React from "react";
import ToDoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <>
      <h1>Project Tracker App</h1>
      <AddTodoForm />
      <ToDoList />
    </>
  );
}

export default App;
