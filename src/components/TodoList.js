import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodoItem, toggle } from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();
  const todoListItems = useSelector((state) => state.todos.items);
  const visibleTodoList = useSelector((state) => state.todos.visibleList);

  let visibleList = [];

  if (visibleTodoList !== "all") {
    visibleList = todoListItems.filter((item) =>
      visibleTodoList === "active"
        ? item.completed === false
        : item.completed === true
    );
  } else {
    visibleList = todoListItems;
  }

  return (
    <ul className="todo-list">
      {visibleList.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle(item.id))}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => dispatch(deleteTodoItem(item.id))}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
