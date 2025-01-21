import React from "react";
import TodoDone from "./TodoDone";
import TodoWaiting from "./TodoWaiting";

export function TodoDisplay() {
  return (
    <div className="flex flex-row">
      <TodoWaiting />
      <TodoDone />
    </div>
  );
}
