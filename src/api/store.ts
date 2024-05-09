import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./reducer";
import filtersReducer from "./job-filters";

export const store = configureStore({
  reducer: {
    "jobs": jobsReducer,
    "filters": filtersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
