import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  console.log("children render");

  return (
    <div className="flex gap-4">
      <span>{todo.text}</span>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default React.memo(TodoItem);
