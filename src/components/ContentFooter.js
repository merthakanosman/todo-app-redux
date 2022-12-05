import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeVisibleList,
  deleteAllCompleted,
} from "../redux/todos/todosSlice";

function ContentFooter() {
  const dispatch = useDispatch();
  const todoListItems = useSelector((state) => state.todos.items);
  const activeTodos = todoListItems.filter((item) => !item.completed).length;

  const visibleTodoList = useSelector((state) => state.todos.visibleList);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeTodos} - </strong>
        item{activeTodos > 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={visibleTodoList === "all" ? "selected" : ""}
            onClick={() => dispatch(changeVisibleList("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={visibleTodoList === "active" ? "selected" : ""}
            onClick={() => dispatch(changeVisibleList("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={visibleTodoList === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeVisibleList("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(deleteAllCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default ContentFooter;
