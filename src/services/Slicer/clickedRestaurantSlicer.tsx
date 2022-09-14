import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const clickedRestaurantSlice = createSlice({
  name: "clickedRestaurant",
  initialState: {
    value: {},
  },
  reducers: {
    setClickedRestaurant: (state: any, action: { payload: any }) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setClickedRestaurant } = clickedRestaurantSlice.actions;

export default clickedRestaurantSlice.reducer;
