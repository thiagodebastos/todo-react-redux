/* flow */
export type Todo = {|
  +id: string,
  +text: string,
  +createdOn: Date,
  +updatedOn?: Date,
  +tags: Array<string>
|};

export type Todos = Array<Todo>;

export type State = {
  todos: Todos,
  completedTodos: Array<$PropertyType<Todo, "id">>
};

export type Action =
  | {
      type: "CREATE_TODO",
      payload: { todo: Todo }
    }
  | {
      type: "UPDATE_TODO",
      payload: { todo: Todo }
    }
  | {
      type: "TOGGLE_TODO",
      payload: { id: $PropertyType<Todo, "id"> }
    }
  | {
      type: "REMOVE_TODO",
      payload: { id: $PropertyType<Todo, "id"> }
    };
