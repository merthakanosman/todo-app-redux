import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { addNewTodoItem } from "../redux/todos/todosSlice";

function Form() {
  const dispatch = useDispatch();
  const [newTodoItem, setNewTodoItem] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!newTodoItem) {
      return;
    }

    dispatch(
      addNewTodoItem({ id: nanoid(), title: newTodoItem, completed: false })
    );
    setNewTodoItem("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTodoItem}
        onChange={(e) => setNewTodoItem(e.target.value)}
      />
    </form>
  );
}

export default Form;
