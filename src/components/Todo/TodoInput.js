import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState();

  const handleAddTodo = () => {
    if (text) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text, completed: false },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ajout des parenthèses pour appeler la méthode
    handleAddTodo();
    setText("");
  };
  return (
    <form class="max-w-sm mx-auto">
      <div class="mb-5">
        <label
          for="Tâche à ajouter"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tâche à ajouter
        </label>
        <input
          type="text"
          id="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Recruter Djibril SAMASSA"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Ajouter une tâche
      </button>
    </form>
  );
}
