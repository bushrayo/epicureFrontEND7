import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const clickedDishSlice = createSlice({
  name: "clickedDish",
  initialState: {
    value: {},
  },
  reducers: {
    setClickedDish: (state: any, action: { payload: any }) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClickedDish } = clickedDishSlice.actions;

export default clickedDishSlice.reducer;
