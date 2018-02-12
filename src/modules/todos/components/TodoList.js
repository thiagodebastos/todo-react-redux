/* @flow */
import React, { type Node } from "react";
import type { Todo } from "../types";
import TodoItem from "./TodoItem";
const TodoList = ({ todos }: Array<Todo>) => (
  <ul>{todos.map(todo => <TodoItem key={todo.id} text={todo.text} />)}</ul>
);

export default TodoList;
