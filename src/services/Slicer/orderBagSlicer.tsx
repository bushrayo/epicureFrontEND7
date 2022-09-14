import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const orderBagSlice = createSlice({
  name: "orderBag",
  initialState: {
    value: [],
  },
  reducers: {
    setOrderBag: (state: any, action: { payload: any }) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrderBag } = orderBagSlice.actions;

export default orderBagSlice.reducer;
