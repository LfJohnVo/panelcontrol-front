import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: true };

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    changeTrue: state => {
      state.value = true;
    },
    changeFalse: state => {
      state.value = false;
    },
  },
});
export const { changeTrue, changeFalse } = loadingSlice.actions;
export const selectLoading = state => state.loading.value;
export default loadingSlice.reducer;
