import { createSlice } from '@reduxjs/toolkit';

const countdownSlice = createSlice({
  name: 'countdown',
  initialState: {
    remainingTime: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  },
  reducers: {
    updateRemainingTime: (state, action) => {
      state.remainingTime = action.payload;
    },
  },
});

export const { updateRemainingTime } = countdownSlice.actions;

export default countdownSlice.reducer;