import React, { use, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoWaiting() {
  const todos = useSelector((state) =>
    state.filter((todo) => todo.completed === false)
  );
  const [edit, setEdit] = useState(false);
  const [itemToEdit, setItemToEdit] = useState();
  const dispatch = useDispatch();
  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: { id } });
  };

  const handleEdit = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: itemToEdit.id, // ID de la tâche à modifier
        text: itemToEdit.text, // Nouveau texte
      },
    });
  };

  return (
    <div className="bg-blue-100 p-3 m-4 rounded-md w-1/2 h-fit">
      <h3>Tâches en attente : ({todos.length})</h3>

      <ul>
        {todos.map((todo) => {
          return (
            <li
              className="flex flex-row justify-between items-center bg-blue-200 p-2 m-1 rounded-md"
              key={todo.id}
            >
              <p> {todo.text}</p>
              <span className="flex flex-row">
                <button
                  className="flex flex-row p-2 m-1 rounded-md bg-green-400"
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  <span>Terminé</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </button>
                <button
                  className="flex
                flex-row
                p-2
                m-1
                rounded-md
                bg-blue-300"
                  onClick={() => {
                    setEdit(true);
                    setItemToEdit(todo);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button
                  className="flex
                flex-row
                p-2
                m-1
                rounded-md
                bg-red-400"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  {/* <span>Supprimer</span> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </span>
            </li>
          );
        })}
      </ul>
      {edit ? (
        <div className="p-6">
          {edit && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4">Modifier la tâche</h2>
                <input
                  type="text"
                  value={itemToEdit?.text}
                  onChange={(e) =>
                    setItemToEdit({ ...itemToEdit, text: e.target.value })
                  }
                  placeholder="Entrez la nouvelle valeur"
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setEdit(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={() => {
                      handleEdit();
                      setEdit(false);
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
