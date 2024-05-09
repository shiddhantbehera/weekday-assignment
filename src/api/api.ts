import { Job } from "../interface/job-type";

export type GetJobsResponseBody = {
  jdList: Job[];
  totalCount: number;
};

export const getJobs = ({
  limit = 10,
  offset,
}: {
  limit?: number;
  offset: number;
}): Promise<GetJobsResponseBody | unknown> => {
  const body = JSON.stringify({
    limit,
    offset,
  });
  return fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
    ...{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
    body,
  }).then((res) => res.json());
};
