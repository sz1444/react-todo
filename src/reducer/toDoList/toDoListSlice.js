import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    createToDo(state, action) {
      const newToDo = {
        id: action.payload.id,
        title: action.payload.title,
        completed: false
      }

      state.push(newToDo)
    },
    removeToDo(state, action)
    {
      return state.filter(item => {
        return item.id !== action.payload;
      })
    },

    updateToDo(state, action)
    {
      state.map(item => {
        if (item.id === action.payload.id) 
        {
          item.completed = action.payload.completed ?? item.completed;

          item.title = action.payload.title ?? item.title;
        }
      })
    }
  },
})

export const selectTodos = state => { return state.todo };

export const selectTodoById = (state, id) => { 
  return state.todo.find(item => item.id === id); 
};

export const { createToDo, removeToDo, updateToDo } = todoSlice.actions;

export default todoSlice.reducer;