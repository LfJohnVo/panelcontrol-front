import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { user: "David" },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = loginSlice.actions;

export const selectUser = (state) => state.login.user;
export default loginSlice.reducer;
