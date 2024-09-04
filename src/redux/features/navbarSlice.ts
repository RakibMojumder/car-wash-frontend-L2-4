import { createSlice } from "@reduxjs/toolkit";

type TNavbarTypes = {
  hoveredItem: string;
};

const initialState: TNavbarTypes = {
  hoveredItem: "",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setHoveredItem: (state, action) => {
      state.hoveredItem = action.payload;
    },
  },
});

export const { setHoveredItem } = navbarSlice.actions;

export default navbarSlice.reducer;
