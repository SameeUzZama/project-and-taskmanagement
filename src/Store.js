import { configureStore } from "@reduxjs/toolkit";
import ProjectReducer from "./Redux/ProjectReducer";

export const store = configureStore({
  reducer: {
    projects: ProjectReducer,
  },
});
