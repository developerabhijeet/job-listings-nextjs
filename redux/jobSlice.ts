import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job } from '@/utils/jobType';
import jobData from '@/utils/jobs.json';

const initialState: Job[] = jobData;

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      return action.payload;
    },
  },
});
export const { setJobs } = jobSlice.actions;
export default jobSlice.reducer;
