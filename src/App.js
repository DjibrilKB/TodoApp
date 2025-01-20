import React from "react";
import { TodoDisplay } from "./components/Todo/TodoDisplay";
import TodoInput from "./components/Todo/TodoInput";

function TodoApp() {
  return (
    <div>
      <TodoInput />
      <TodoDisplay />
    </div>
  );
}

export default TodoApp;
