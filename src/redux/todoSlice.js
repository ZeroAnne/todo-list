import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 1, name: "起床" },
  { id: 2, name: "刷牙" },
  { id: 3, name: "上班" },
];

//資料庫撈進來的資料多添加checked欄位，及添加進度表數據
const initialState = {
  todolist: data.map((item) => ({
    ...item,
    checked: false,
  })),
  percent: 0,
};

const calculatePercent = (list) => {
  const totalItems = list.length;
  const completedItems = list.filter((item) => item.checked).length;
  return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //添加代辦事項
    addTodo: (state, action) => {
      state.todolist.push({ ...action.payload, checked: false });
      state.percent = calculatePercent(state.todolist);
      console.log(state.todolist);
    },
    //切換勾選狀態
    toggleChecked: (state, action) => {
      const todo = state.todolist.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
      state.percent = calculatePercent(state.todolist); // 更新進度條
      console.log(todo);
    },
    //刪除項目
    deleteTodo: (state, action) => {
      state.todolist = state.todolist.filter(
        (todo) => todo.id !== action.payload
      );
      state.percent = calculatePercent(state.todolist); // 更新進度條
    },
    //刪除所有項目
    deleteAlltodo: (state) => {
      state.todolist = [];
      state.percent = 0; // 清空進度條
    },
  },
});

export const { addTodo, toggleChecked, deleteTodo, deleteAlltodo } =
  todoSlice.actions; //取用的方法
export const selectTodo = (state) => state.todo.todolist; //取用資料
export const selectPercent = (state) => state.todo.percent; //取用資料

export default todoSlice.reducer;
