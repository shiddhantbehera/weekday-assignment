import { CardContent, Stack } from "@mui/material";
import { Job } from "../../../interface/job-type";
import RequiredExperience from "./experience/experience";
import JobDescription from "./job-description/job-description";
import EstimatedSalary from "./salary/salary";

type NeededKeys =
	| "jobDetailsFromCompany"
	| "maxExp"
	| "minExp"
	| "maxJdSalary"
	| "minJdSalary"
	| "salaryCurrencyCode";

interface JobDetailsProps {
	data: Pick<Job, NeededKeys>;
}

export default function JobDetails({ data }: JobDetailsProps) {
  const {
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode,
    jobDetailsFromCompany,
    minExp,
  } = data;

  return (
    <CardContent>
      <Stack spacing={2}>
        <EstimatedSalary
          minSalary={minJdSalary}
          maxSalary={maxJdSalary}
          currencyCode={salaryCurrencyCode}
        />
        <JobDescription description={jobDetailsFromCompany} />
        <RequiredExperience minimumYears={minExp} />
      </Stack>
    </CardContent>
  );
}