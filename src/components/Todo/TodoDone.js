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
    <div className="p-3 m-4 rounded-md w-1/2 h-fit bg-green-200">
      <h3>Tâches effectuées </h3>

      <ul>
        {todos.map((todo) => {
          return (
            <li
              className="flex flex-row justify-between items-center bg-green-300 p-2 m-1 rounded-md"
              key={todo.id}
            >
              <p> {todo.text}</p>
              <span className="flex flex-row">
                <button
                  className="flex flex-row p-2 m-1 rounded-md bg-blue-400"
                  onClick={() => handleToggleTodo(todo.id)}
                >
                  <span>Annuler</span>
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
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
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
    </div>
  );
}
