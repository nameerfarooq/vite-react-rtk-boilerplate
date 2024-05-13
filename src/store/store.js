import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/countSlice";
const store = configureStore({
  reducer: {
    count: countReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store