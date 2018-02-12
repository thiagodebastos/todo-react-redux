/* @flow */
import React from "react";
import { Todo } from "../types";
const TodoItem = (props: Todo) => <li>{props.text}</li>;
export default TodoItem;
