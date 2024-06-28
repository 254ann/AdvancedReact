// import { ACTIONS } from "../actions/actions";
//const reducer = (state, action)
const ACTIONS = {
    ADD_TODO: 'add_todo',
    TOGGLE_ACTION: 'toggle_action',
    DELETE_TODO: 'delete_todo'
}
export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, createTodo(action.payload.name)];

      //finish the edit and the delete of todos
    default:
      return todos;
  }
};

const createTodo = () => {
  return { id: Date.now(), name: name, complete: false };
};
