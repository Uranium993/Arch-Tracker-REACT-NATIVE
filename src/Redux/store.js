import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { projectList } from "./rtkQuery/api";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    [projectList.reducerPath]: projectList.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectList.middleware),
});
