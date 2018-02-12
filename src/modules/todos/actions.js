/* flow */

import type { Action, Todo, Todos } from "./types";

export function createTodo(todo: Todo): Action {
  return {
    type: "CREATE_TODO",
    payload: { todo }
  };
}

export function updateTodo(todo: Todo): Action {
  return {
    type: "UPDATE_TODO",
    payload: { todo }
  };
}

export function completeTodo(id: $PropertyType<Todo, "id">): Action {
  return {
    type: "TOGGLE_TODO",
    payload: { id }
  };
}
