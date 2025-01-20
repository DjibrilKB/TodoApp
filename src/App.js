import React from "react";
import { useSelector, useDispatch } from "react-redux";

function TodoApp() {
  const todos = useSelector((state) => state); // Récupère les todos depuis le store
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const text = prompt("Entrez une tâche :");
    if (text) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text, completed: false },
      });
    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Ajouter une tâche</button>
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
    </div>
  );
}

export default TodoApp;
