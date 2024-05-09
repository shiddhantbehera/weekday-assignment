import { Grid } from "@mui/material";
import JobCard from "../job-card/job-details/job-details";
import { useAppDispatch, useAppSelector } from "../../api/hooks";
import { GetJobsResponseBody, getJobs } from "../../api/api";
import { appendJobs, incrementPageOffset } from "../../api/reducer";
import InfiniteScroll from "./infinite-scroll";

export default function JobList() {
  const pageOffset = useAppSelector((state) => state.jobs.pageOffset);
  const jobs = useAppSelector((state) => state.jobs.jobs);
  const dispatch = useAppDispatch();

  const fetchJobsAndIncrementPageOffset = async () => {
    const jobsResponseSize = 12;
    const response = (await getJobs({
      offset: jobsResponseSize * pageOffset,
      limit: jobsResponseSize,
    })) as GetJobsResponseBody;
    const { jdList: jobs } = response;
    dispatch(appendJobs(jobs));
    dispatch(incrementPageOffset());
  };

  const onScrolledToEnd = () => {
    fetchJobsAndIncrementPageOffset();
  };

  return (
    <Grid container spacing={2}>
      {jobs.map((job) => (
        <Grid item xs={12} sm={6} md={4} key={job.jdUid}>
          <JobCard data={job} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <InfiniteScroll callback={onScrolledToEnd} />
      </Grid>
    </Grid>
  );
}