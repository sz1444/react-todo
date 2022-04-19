import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from './reducer/toDoList/toDoListSlice';


export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
})
