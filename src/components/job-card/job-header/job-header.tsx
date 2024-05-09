import { CardHeader, Avatar, Typography } from "@mui/material";
import { Job } from "../../../interface/job-type";

type NeededKeys = "companyName" | "logoUrl" | "location" | "jobRole";

interface JobHeaderProps {
  data: Pick<Job, NeededKeys>;
}

export default function JobHeader({ data }: JobHeaderProps) {
  const { companyName, logoUrl, location, jobRole } = data;

  return (
    <CardHeader
      title={
        <>
          <Typography>{companyName}</Typography>
          <Typography variant="h6">{jobRole}</Typography>
        </>
      }
      subheader={location}
      avatar={
        <Avatar
          src={logoUrl}
          alt={`${companyName} logo`}
          sx={{ borderRadius: 2 }}
        />
      }
    />
  );
}
