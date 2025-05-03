import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miniProjectST: false,
  projectST: false,
};

const exampleSlice = createSlice({
  name: "screentransform",
  initialState,
  reducers: {
    setMiniProjectST: (state, actions) => {
      state.miniProjectST = actions.payload;
    },
    setProjectST: (state, actions) => {
      state.projectST = actions.payload;
    },
  },
});

export const sTActions = exampleSlice.actions;
export default exampleSlice.reducer;
