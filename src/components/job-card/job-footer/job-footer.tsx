import { Button, Stack, CardActions } from "@mui/material";
import { Job } from "../../../interface/job-type";

type NeededKeys = "jdLink";

interface JobFooterProps {
  data: Pick<Job, NeededKeys>;
}

export default function JobFooter({ data }: JobFooterProps) {
  const { jdLink } = data;

  return (
    <CardActions>
      <Stack width="100%" spacing={1} padding={1}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            window.location.replace(jdLink);
          }}
        >
          ⚡Apply
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
        >
          Unlock referral asks
        </Button>
      </Stack>
    </CardActions>
  );
}
