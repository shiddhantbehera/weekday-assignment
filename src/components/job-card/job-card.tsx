import Card from "@mui/material/Card";
import JobDetails from "./job-details/job-details";
import JobFooter from "./job footer/job-footer";
import JobHeader from "./job header/job-header";
import { Job } from "../../interface/job-type";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <>
      <Card variant="elevation" sx={{ borderRadius: 6 }}>
        <JobHeader data={job} />
        <JobDetails data={job} />
        <JobFooter data={job} />
      </Card>
    </>
  );
}
