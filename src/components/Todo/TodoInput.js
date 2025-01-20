import React from "react";
import { useDispatch } from "react-redux";

export default function TodoInput() {
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
  return <button onClick={handleAddTodo}>Ajouter une tâche</button>;
}
