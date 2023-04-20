import react from "react";

function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = document.getElementById("todoTitle").value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle"></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
