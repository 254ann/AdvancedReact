import React, { useState } from 'react';
import { ACTIONS } from './ToDoListComponent';
import "./todo.css"

function Todo({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);

  function handleEditSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id, name: newName } });
    setIsEditing(false);
  }

  return (
    <div className="todo">
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <div
            style={{ color: todo.complete ? "rgb(7, 245, 7)" : "#fff" }}
            className="todo__title"
          >
            {todo.name}
          </div>
          <div className="todo__buttons">
            <button
              className="todo__toggle"
              onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}
            >
              Toggle
            </button>
            <button
              className="todo__delete"
              onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
            >
              Delete
            </button>
            <button
              className="todo__edit"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
