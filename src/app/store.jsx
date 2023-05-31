import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../features/login/loginSlice";
import { loadingSlice } from "../features/loading/loadingSlice";

export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    loading: loadingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
