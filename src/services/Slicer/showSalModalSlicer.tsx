import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const showSalModalSlice = createSlice({
  name: "showSalModal",
  initialState: {
    value: false,
  },
  reducers: {
    setShowSalModal: (state: any, action: { payload: any }) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowSalModal } = showSalModalSlice.actions;

export default showSalModalSlice.reducer;
