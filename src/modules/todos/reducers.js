/* flow */
import { updateObjectInArray } from "../core/utilities";

const initialState: State = [
  {
    id: "sdfs324",
    text: "buy milk",
    createdOn: new Date(),
    tags: ["home", "errands"],
    completed: false
  },
  {
    id: "fsdfhd45",
    text: "buy a car",
    createdOn: new Date(),
    tags: ["home", "errands"],
    completed: true
  },
  {
    id: "fdsf23",
    text: "buy water",
    createdOn: new Date(),
    tags: ["home", "errands"],
    completed: false
  },
  {
    id: "sdfdsf435",
    text: "buy bread",
    createdOn: new Date(),
    tags: ["home", "errands"],
    completed: false
  }
];

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "CREATE_TODO":
      return [...state, action.payload.todo];

    case "UPDATE_TODO":
      const todoIndex = state.findIndex(
        todo => todo.id === action.payload.todo.id
      );

      const newTodosArray = updateObjectInArray(
        state,
        todoIndex,
        action.payload.todo
      );

      return { ...state, todos: newTodosArray };

    case "TOGGLE_TODO":
      return {
        ...state,
        completedTodos: [...state.completedTodos, action.payload.id]
      };

    case "REMOVE_TODO":
      const todoIndex1 = state.findIndex(todo => todo.id === action.payload.id);
      const newTodos = state.splice(todoIndex1, 1);
      return [...newTodos];

    default:
      return state;
  }
};
