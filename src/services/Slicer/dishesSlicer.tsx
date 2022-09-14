import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    value: [],
  },
  reducers: {
    setDishes: (state: any, action: { payload: any }) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDishes } = dishesSlice.actions;

export default dishesSlice.reducer;
