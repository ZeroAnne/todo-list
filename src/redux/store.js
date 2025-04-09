import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";
import timerReducer from "./timeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todo: todoReducer, // 這裡可以加更多的 reducer
    timer: timerReducer,
  },
});

export default store;
