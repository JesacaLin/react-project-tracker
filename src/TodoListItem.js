import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <li>
      {todo.id}: {todo.title}
    </li>
  );
};

export default TodoListItem;
