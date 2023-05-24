import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => {
        return {
          payload: {
            id: nanoid(),
            title,
            isDone: false,
          },
        };
      },
    },
    removeTodo: (state, action) => {
      let { id } = action.payload;
      state = state.filter((t) => t.id !== id);
    },
    changeTodoStatus: (state, action) => {
      let { id, check } = action.payload;
      state.map((t) => {
        if (t.id === id) {
          t.isDone = check;
        }
        return t;
      });
    },
  },
});

export const getAllTodos = (state) => state.todos;

export const { addTodo, removeTodo, changeTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
