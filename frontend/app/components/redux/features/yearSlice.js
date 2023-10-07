import { createSlice } from "@reduxjs/toolkit";

const initialYear = {
  selectedYear: 2000,
};

export const year = createSlice({
  name: "year",
  initialState: initialYear,

  reducers: {
    changeYear(state, action) {
      state.selectedYear = action.payload;
    },
  },
});

export const { changeYear } = year.actions;
export default year.reducer;
