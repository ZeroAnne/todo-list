import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer, // 這裡可以加更多的 reducer
  },
});

export default store;
