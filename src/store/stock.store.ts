import {createSlice} from "@reduxjs/toolkit";
 
const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: {
      value: 0
    },
  },
  reducers: {
    increment(state) {
      state.counter.value += 1;
    },
    decrement(state) {
      state.counter.value -= 1;
    }
  }}
  );

export const {decrement, increment} = stock.actions;
export default stock.reducer;