import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalTime: 25, // 當前番茄鐘的總時長，默認 25 分鐘
  countDown: 25, // 剩餘時間
  pause: false, // 是否暫停
  isRunning: false, // 是否正在計時
  completedSessions: 0, // 今日已完成的番茄鐘次數
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    pauseTodo: (state, action) => {},
  },
});

export default timerSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   totalTime: 25,  // 當前番茄鐘的總時長，默認 25 分鐘
//   countDown: 25,  // 剩餘時間
//   pause: false,   // 是否暫停
//   isRunning: false, // 是否正在計時
//   completedSessions: 0, // 今日已完成的番茄鐘次數
// };

// export const timerSlice = createSlice({
//   name: "timer",
//   initialState,
//   reducers: {
//     startTimer: (state) => {
//       state.isRunning = true;  // 開始計時
//       state.pause = false;     // 當計時開始時，暫停狀態應該變為 false
//     },
//     pauseTimer: (state) => {
//       state.isRunning = false; // 暫停計時
//       state.pause = true;      // 當前狀態應該是暫停
//     },
//     resetTimer: (state) => {
//       state.countDown = state.totalTime; // 重設時間為初始設定的 25 分鐘
//       state.isRunning = false; // 重設時停止計時
//       state.pause = false;     // 當計時器重設後，應該處於未暫停狀態
//     },
//     completeSession: (state) => {
//       state.completedSessions += 1; // 每完成一個番茄鐘，累加次數
//     },
//     updateTime: (state, action) => {
//       state.countDown = action.payload; // 根據倒數時間更新 countDown
//     },
//   },
// });

// export const { startTimer, pauseTimer, resetTimer, completeSession, updateTime } = timerSlice.actions;

// export default timerSlice.reducer;
