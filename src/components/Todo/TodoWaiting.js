import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoWaiting() {
  const todos = useSelector((state) =>
    state.filter((todo) => todo.completed === false)
  );
  const dispatch = useDispatch();
  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  return (
    <div className="bg-blue-200 p-3 m-4 rounded-md w-1/2">
      <h3>Tâches en attente</h3>

      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
              <button onClick={() => handleToggleTodo(todo.id)}>Terminé</button>
              <button onClick={() => handleRemoveTodo(todo.id)}>
                Supprimer
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
