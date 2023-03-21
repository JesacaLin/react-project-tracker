import React from "react";

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

  const listItem = todoList.map((el) => (
    // The key prop helps React keep track of the identity of each element in an array of components or elements, which is important for efficient updates to the DOM.
    <li key={el.id}>
      {el.id}: {el.title}
    </li>
  ));

  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
};

export default ToDoList;
