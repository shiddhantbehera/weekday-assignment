import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Job } from "../interface/job-type";

type JobsState = {
    jobs: Job[],
    pageOffset: number
}

const initialState: JobsState = {
  jobs: [],
  pageOffset: 0,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    appendJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs.push(...action.payload);
    },
    incrementPageOffset: (state) => {
      state.pageOffset += 1;
    },
  },
});

export default jobsSlice.reducer;

export const { appendJobs, incrementPageOffset } = jobsSlice.actions;
