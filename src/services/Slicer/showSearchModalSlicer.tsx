import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const showSearchModalSlice = createSlice({
  name: "showSearchModal",
  initialState: {
    value: false,
  },
  reducers: {
    setShowSearchModal: (state: any, action: { payload: any }) => {
      return {
        ...state,
        value: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShowSearchModal } = showSearchModalSlice.actions;

export default showSearchModalSlice.reducer;
