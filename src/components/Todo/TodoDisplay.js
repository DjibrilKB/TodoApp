import React from "react";
import { useDispatch, useSelector } from "react-redux";

export function TodoDisplay() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => handleToggleTodo(todo.id)}>Terminé</button>
          <button onClick={() => handleRemoveTodo(todo.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}
