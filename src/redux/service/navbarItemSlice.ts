import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeName: "",
};

export const navbarItemSlice = createSlice({
  name: "navbarItem",
  initialState,
  reducers: {
    setActiveName: (state, { payload }) => {
      console.log(payload);
      state.activeName = payload;
    },
  },
});

export const { setActiveName } = navbarItemSlice.actions;
export default navbarItemSlice.reducer;
