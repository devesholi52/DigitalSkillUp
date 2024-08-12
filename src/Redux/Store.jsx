import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Reducers/CreateSlice";

export const Store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
