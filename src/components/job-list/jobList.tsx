import { Grid } from "@mui/material";
import JobCard from "../job-card/job details";
import { Job } from "../../interface/job-details";

interface JobListMock {
	jobs: Job[];
}
export default function JobList({ jobs }: JobListMock) {
  return (
    <Grid container spacing={2}>
      {jobs.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
          <JobCard data={job} />
        </Grid>
      ))}
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}
