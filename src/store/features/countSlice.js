import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
    },
    incrementCount(state, action) {
      state.count += 1;
    },
    decrementCount(state, action) {
      state.count -= 1;
    },
  },
});

export const { setCount, incrementCount, decrementCount } = countSlice.actions;
export default countSlice.reducer;
