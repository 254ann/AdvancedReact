import  { useCallback, useReducer, useState } from "react";
import { todoReducer } from "../reducers/todoReducer";
import { ACTIONS } from "../actions/actions";
function ToDocomponent() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  //handling submit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (name.trim() === "") return; //basic validations
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
      console.log(todos)
    },
    [name, dispatch]
  );
  return (
    <div>
      <h3>This is a todo List</h3>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Add Todo"
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Create Todo</button>

          <div>
            {todos.map((todoObj) => (
              <li key={todoObj.id}>{todoObj.name}</li>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToDocomponent;
