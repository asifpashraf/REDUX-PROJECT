// CounterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount : (state, action) => {
      state.value -= action.payload;
    },
    divideByNumber : (state , action) => {
      state.value /= action.payload
    },
    roundNumber : (state, action) => {
      state.value = action.payload
    },
  },
});

export const { increment, decrement, incrementByAmount,decrementByAmount,divideByNumber,roundNumber } = counterSlice.actions;
export default counterSlice.reducer;
