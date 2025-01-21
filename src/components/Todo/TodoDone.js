import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoDone() {
  const todos = useSelector((state) =>
    state.filter((todo) => todo.completed === true)
  );
  const dispatch = useDispatch();
  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  return (
    <div className="p-3 m-4 rounded-md w-1/2 bg-green-200">
      <h3>Tâches effectuées </h3>

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
              <button onClick={() => handleToggleTodo(todo.id)}>
                <span></span>Terminé
              </button>
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
