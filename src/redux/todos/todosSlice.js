import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    visibleList: "all",
  },
  reducers: {
    addNewTodoItem: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodoItem: (state, action) => {
      const id = action.payload;
      const item = state.items.filter((item) => item.id !== id);
      state.items = item;
    },
    toggle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    deleteAllCompleted: (state) => {
      const item = state.items.filter((item) => item.completed === false);
      state.items = item;
    },
    changeVisibleList: (state, action) => {
      state.visibleList = action.payload;
    },
  },
});

export const {
  addNewTodoItem,
  deleteTodoItem,
  toggle,
  deleteAllCompleted,
  changeVisibleList,
} = todosSlice.actions;
export default todosSlice.reducer;
