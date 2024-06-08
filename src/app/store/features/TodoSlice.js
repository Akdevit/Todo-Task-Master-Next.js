import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialTodos = () => {
  if (typeof localStorage !== "undefined") {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }
  return [];
};

const initialState = {
  todo: getInitialTodos(),
};

export const TodosSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.inputvalue,
        date: action.payload.duedate,
        Priority: action.payload.priority,
      };
      state.todo.push(newTodo);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.todo));
      }
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("todos", JSON.stringify(state.todo));
      }
    },
    updateTodoText: (state, action) => {
      const { getupdatetextid, updatestext } = action.payload;
      const todoToUpdate = state.todo.find(
        (todo) => todo.id === getupdatetextid
      );
      if (todoToUpdate) {
        todoToUpdate.text = updatestext;
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("todos", JSON.stringify(state.todo));
        }
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodoText } = TodosSlice.actions;
export default TodosSlice.reducer;
