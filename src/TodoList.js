import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "project title 1",
  },
  {
    id: 2,
    title: "project title 2",
  },
  {
    id: 3,
    title: "project title 3",
  },
  {
    id: 4,
    title: "project title 4",
  },
];

const ToDoList = () => {
  //code here

  const listItem = todoList.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} />
  ));

  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
};

export default ToDoList;
