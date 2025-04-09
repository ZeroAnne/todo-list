import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "purple", //預設紫色
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "purple" ? "orange" : "purple";
    },
    setTheme: (state, action) => {
      state.mode = action.payload; // "purple" 或 "orange"
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
