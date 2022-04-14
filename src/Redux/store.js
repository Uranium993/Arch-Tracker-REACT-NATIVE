import { configureStore } from "@reduxjs/toolkit";
import { projectList } from "./rtkQuery/api";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    [projectList.reducerPath]: projectList.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      projectList.middleware
    ),
});

// middleware: (getDefaultMiddleware) =>
// getDefaultMiddleware().concat(projectList.middleware),
